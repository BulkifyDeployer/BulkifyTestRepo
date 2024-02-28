import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles, ErrorBoundary } from 'components'
import { QueryClientProvider, QueryClient, QueryCache, MutationCache } from 'react-query'
// import { ReactQueryDevtools } from "react-query/devtools";
import "./onboard-override.css";
import { ErrorProvider, OnboardProvider } from 'hooks';
// import {AmplitudeProvider } from 'hooks';
// import { enableReactQueryDevTools } from "utils";
import './index.css';
// import Sentry from "utils/sentry";
import App from './App';

const client = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error("Query failed:", error);
      // Добавьте здесь свой собственный код для обработки ошибок запросов
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, vars, context, mutation) => {
      console.error("Mutation failed:", error);
      // Добавьте здесь свой собственный код для обработки ошибок мутаций
    },
  }),
});


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ErrorBoundary>
      <QueryClientProvider client={client}>
        <OnboardProvider>
          <ErrorProvider>
            <App />
          </ErrorProvider>
        </OnboardProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

