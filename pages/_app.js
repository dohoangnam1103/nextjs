import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { store } from "../src/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <Provider store={store}>
      {pageLoading ? <div>Loading</div> : <Component {...pageProps} />}
    </Provider>
  );
}

export default MyApp;
