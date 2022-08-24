export const checkIsServer = () => typeof window === `undefined`;

export const loadScripts = async ({ u, type = `text/javascript`, id }) => {
  return new Promise(function (resolve, reject) {
    var s = document.createElement(`script`);
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
};

export const GTMPageView = (url) => {
  const pageEvent = {
    event: `pageview`,
    page: url,
  };
  window &&
    (window as any).dataLayer &&
    (window as any).dataLayer.push(pageEvent);

  return pageEvent;
};
