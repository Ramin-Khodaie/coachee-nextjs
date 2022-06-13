import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import NotifyProvider from "../context/notify/NotifyProvider";
// import { store } from "../redux/store";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  // const persiststore = persistStore(store);
  return (
    <>
      <NotifyProvider>
        <Component {...pageProps} />
      </NotifyProvider>
    </>
  );
}

export default MyApp;
