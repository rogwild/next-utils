import "../styles/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "~redux/index";
import { SEO } from "~utils/seo";
import utils from "~next-utils";
import { useRouter } from "next/router";
import AuthWrapper from "~components/auth-wrapper";
import { useEffect } from "react";
import { routes } from "~utils/routes";

const seoBlock = SEO[`index`];

const { GTMPageView, loadScripts } = utils.vanilla;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = useRouter();

  useEffect(() => {
    Promise.all([
      loadScripts({
        u: `/js/gtm.js`,
        id: process.env.NEXT_PUBLIC_GTM_KEY || `GTM-XXXXXXX`,
      }),
    ]).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const { events, query, asPath } = router;
    const handleRouteChange = (url: any) => GTMPageView(url);
    const referrer = query[`utm_referrer`] || query[`utm_referer`];
    events.on(`routeChangeComplete`, handleRouteChange);

    if (window && referrer) {
      window.utmReferer = referrer;
    }

    return () => {
      events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router]);

  const { isPublic, isAuth } =
    routes[pathname as keyof typeof routes] || routes[`/404`];

  return (
    <div>
      <MetaBlock />
      <Provider store={store}>
        <AuthWrapper isPublic={isPublic} isAuth={isAuth}>
          <>
            <Component {...pageProps} />
            <div id="modal" />
            <div id="notification" />
          </>
        </AuthWrapper>
      </Provider>
    </div>
  );
}

export default App;

const MetaBlock = () => (
  <Head>
    <title className="text-base text-green-400">
      {`${seoBlock.title} | ${seoBlock.description}`}
    </title>
    <meta name="description" content={seoBlock.description} />
    <link rel="icon" href="/images/favicon.svg" />
    <meta name="title" content={seoBlock.title} />
    <meta name="description" content={seoBlock.description} />
    <meta name="image" content={seoBlock.image} />
    <meta name="url" content={seoBlock.url} />
    <meta property="og:site_name" content={seoBlock.title} />
    <meta property="og:title" content={seoBlock.ogTitle} />
    <meta property="og:description" content={seoBlock.ogDescription} />
    <meta property="og:url" content={seoBlock.url} />
    <meta property="og:image" content={seoBlock.ogImage} />
    <meta name="twitter:card" content={seoBlock.twitterCard} />
    <meta name="twitter:title" content={seoBlock.twitterTitle} />
    <meta name="twitter:description" content={seoBlock.twitterDescription} />
    <meta name="twitter:url" content={seoBlock.url} />
    <meta name="twitter:image" content={seoBlock.twitterImage} />
    <link rel="stylesheet" href="/css/calendar.css" />
  </Head>
);
