export function checkIsServer() {
  return typeof window === `undefined`;
}

export async function loadScripts({ u, type = `text/javascript`, id }) {
  return new Promise(function (resolve, reject) {
    const s = document.createElement(`script`);
    s.type = type;
    s.async = true;
    s.src = u;
    if (id) {
      s.id = id;
    }

    s.onload = () => resolve(s);
    s.onerror = () => reject(new Error(`Error loading script ${u}`));

    document.body.append(s);
  });
}

export function GTMPageView(url) {
  const pageEvent = {
    event: `pageview`,
    page: url,
  };
  window &&
    (window as any).dataLayer &&
    (window as any).dataLayer.push(pageEvent);

  return pageEvent;
}

export function isNil(value) {
  return value === null || value === undefined;
}

export const urlRegex =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gim;

export function addProtocolToUrl(url) {
  const splittedString = url.split(`://`);
  let urlWithProtocol = ``;
  if (splittedString.length > 1) {
    urlWithProtocol =
      splittedString[0][-1] === `s` ? url : `https://${splittedString[1]}`;
  } else {
    urlWithProtocol = `https://${url}`;
  }
  return urlWithProtocol;
}

export function getURLsFromText(text) {
  let displayUrl = ``;
  const textWithMarkup = text.replace(urlRegex, (replacement) => {
    if (!displayUrl) {
      displayUrl = replacement;
    }
    const urlWithProtocol = addProtocolToUrl(replacement);
    return `[${replacement}](${urlWithProtocol})`;
  });
  return {
    textWithMarkup,
    displayUrl,
  };
}

export function parseMimeType(mime) {
  if (!mime) return {};
  const splittedMime = mime?.split(`/`);

  return { type: splittedMime[0], ext: splittedMime[1] };
}

export function getPastDay(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

export function getMonthRange({ date, firstDayQuantity, lastDayQuantity }) {
  const firstDay = new Date(
    date.getFullYear(),
    date.getMonth() - (firstDayQuantity || 0),
    1
  );
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + (lastDayQuantity || 0),
    0
  );

  return [firstDay, lastDay];
}
