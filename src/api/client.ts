import axios from "axios";
import { stringify } from "qs";
import { combineHeaders, transformResponseItem } from "./";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function createEventNotification(props: any) {}

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
          createEventNotification({
            event: `error`,
            title: message,
          });
      });
  }
}
