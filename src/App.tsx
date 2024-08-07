import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import DarkModeProvider from "./context/DarkModeContext";
import Layout from "./ui/Layout";
import Overview from "./pages/Overview";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import Auth from "./pages/Auth";
import GlobalStyles from "./styles/GlobalStyles";
import { useContacts } from "./services/hooks/useContacts";
import ActionsProvider from "./context/ActionsContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  useContacts();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <ActionsProvider>
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
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/auth" element={<Auth />}>
                <Route index element={<Navigate to="login" replace />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
            </Routes>
          </ActionsProvider>
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
              duration: 2000,
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
    </>
  );
}

export default App;
