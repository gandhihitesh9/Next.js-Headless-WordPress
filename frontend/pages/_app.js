import '../src/styles/index.scss'
import {ApolloProvider} from "@apollo/client";
import client from "../src/apollo/client";
// video #8 Display WordPress Menus in Next.js via GraphQL completed.
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
