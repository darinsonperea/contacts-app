import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Overview from "./pages/Overview";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Overview />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Favorites />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
