import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";
import DarkModeProvider from "./context/DarkModeContext";
import Layout from "./ui/Layout";
import Overview from "./pages/Overview";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";

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
              <Route
                element={
                  <DarkModeProvider>
                    <Layout />
                  </DarkModeProvider>
                }
              >
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Favorites />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-right"
            gutter={8}
            containerStyle={{
              margin: "50px 0",
            }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "14px",
                maxWidth: "500px",
                padding: "10px",
                color: "black",
              },
            }}
          />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
