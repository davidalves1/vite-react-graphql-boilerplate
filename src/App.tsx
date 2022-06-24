import { ApolloProvider } from '@apollo/client';
import { client } from '@/service/graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      <h1 className="content-center text-2xl">Hello World</h1>
    </ApolloProvider>
  );
}

export default App;
