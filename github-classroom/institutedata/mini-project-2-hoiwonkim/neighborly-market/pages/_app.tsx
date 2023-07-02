// ./pages/_app.tsx
/* import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("APP IS RUNNING");
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div> */
      {/*       <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          window.fbAsyncInit = function () {
            FB.init({
              appId: "your-app-id",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v13.0",
            });
          };
        }}
      /> */}
{/*     </SWRConfig>
  );
}

export default MyApp;
 */}

// ./pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

let socket;

function MyApp({ Component, pageProps }: AppProps) {
  const [socketState, setSocket] = useState();

  useEffect(() => {
    socket = io('http://localhost:4000');
    setSocket(socket);

    return() => {
      socket.close();
    };
  }, []);

  console.log("APP IS RUNNING");
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} socket={socketState} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;

 
