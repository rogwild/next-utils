export function combineHeaders({ withAuth }: { withAuth?: boolean }) {
  const headers: {
    Authorization?: string;
  } = {};

  if (withAuth) {
    const token = localStorage.getItem(`jwt`);
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export function isObject(data) {
  return data && typeof data === `object`;
}

export function isArray(data) {
  return data && Array.isArray(data);
}

export function snakeToCamel(str: string) {
  if (str[0] === "_") {
    return str;
  }

  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace(`-`, ``).replace(`_`, ``);
  });
}

export function transformEntriesInObj(item) {
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
}

export function transformResponseItem(resItem: any) {
  if (isArray(resItem)) {
    return resItem.map((item) => transformResponseItem(item));
  }

  if (isObject(resItem)) {
    if (isArray(resItem.data)) {
      resItem = [...resItem.data];
    } else if (isObject(resItem.data)) {
      resItem = transformEntriesInObj(resItem.data);
    } else if (resItem.data === null) {
      resItem = null;
    } else {
      resItem = transformEntriesInObj(resItem);
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
}
