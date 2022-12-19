import axios from "axios";
import { stringify } from "qs";

import notification from "../components/spring-notification";
const { createNotification } = notification;

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const combineHeaders = ({ withAuth }: { withAuth?: boolean }) => {
  const headers: {
    Authorization?: string;
  } = {};

  if (withAuth) {
    const token = localStorage.getItem(`jwt`);
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

export const isObject = (data) => data && typeof data === `object`;

export const isArray = (data) => data && Array.isArray(data);

export const snakeToCamel = (str: string) => {
  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace(`-`, ``).replace(`_`, ``);
  });
};

export const flatItemAttributes = (data) => {
  if (!data?.attributes) return data;

  return {
    id: data?.id,
    ...data.attributes,
  };
};

export const transformEntriesInObj = (item) => {
  if (isObject(item) && !isArray(item)) {
    const entries = Object.entries(item).map((entry) => {
      const key = snakeToCamel(entry[0]);

      let value: any = entry[1];

      if (isObject(value)) {
        value = transformEntriesInObj(value);
      } else if (isArray(value)) {
        value = value.map((elem) => transformEntriesInObj({ item: elem }));
      }

      return [key, value];
    });

    return Object.fromEntries(entries);
  }

  return item;
};

export const transformResponseItem = (resItem: any) => {
  if (isArray(resItem)) {
    return resItem.map((item) => transformResponseItem(item));
  }

  if (isObject(resItem)) {
    if (isArray(resItem.data)) {
      resItem = [...resItem.data];
    } else if (isObject(resItem.data)) {
      resItem = transformEntriesInObj(flatItemAttributes(resItem.data));
    } else if (resItem.data === null) {
      resItem = null;
    } else {
      resItem = transformEntriesInObj(flatItemAttributes(resItem));
    }

    if (isObject(resItem) && isObject(resItem.meta)) {
      resItem._meta = resItem.meta;
    }

    for (const key in resItem) {
      resItem[key] = transformResponseItem(resItem[key]);
    }

    return resItem;
  }

  return resItem;
};

export class Api {
  baseUrl: string;

  constructor(url?: string) {
    this.baseUrl = url || BACKEND_URL;
  }

  request({
    model,
    query,
    method = `GET`,
    data,
    withAuth,
    headers,
    id = ``,
    notifyError = true,
  }: {
    model: string;
    query?: object;
    method?: string;
    data?: object;
    withAuth?: boolean;
    headers?: object;
    id?: string | number;
    notifyError?: boolean;
  }) {
    const stringifiedQuery = stringify(query, {
      encodeValuesOnly: true,
    });
    const passHeaders = { ...headers, ...combineHeaders({ withAuth }) };

    return axios({
      url: `${this.baseUrl}/api/${model}/${id}?${stringifiedQuery}`,
      headers: passHeaders,
      method,
      data,
    })
      .then((res) => transformResponseItem(res.data))
      .catch((error) => {
        const message = error.response?.data?.error?.message || error?.message;

        console.log(`error`, method, model, error.response?.data);
        notifyError &&
          createNotification({
            event: `error`,
            title: message,
          });
      });
  }
}
