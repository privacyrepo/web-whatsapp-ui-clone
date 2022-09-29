import "../styles/globals.css";
import type { AppProps } from "next/app";
import { JobProvider } from "../context/JobContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JobProvider>
      <Component {...pageProps} />
    </JobProvider>
  );
}

export default MyApp;
