import "../styles/globals.css";
import type { AppProps } from "next/app";
import { JobProvider } from "../context/JobContext";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
const manageEndpoint = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WEBINY_API_MANAGE_URL,
  headers: {
    Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`,
  },
});
const readEndpoint = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WEBINY_API_READ_URL,
  headers: {
    Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`,
  },
});
const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().endpointType === "manage",
    manageEndpoint,
    readEndpoint
  ),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <JobProvider>
        <Component {...pageProps} />
      </JobProvider>
    </ApolloProvider>
  );
}

export default MyApp;
