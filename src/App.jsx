import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {jwtDecode} from 'jwt-decode'
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
// import LoginRoute from "./utils/LoginRoute";
import PageNotFound from "./pages/PageNotFound";
// import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./utils/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";
import UserLayout from "./Layout/UserLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SendMoney from "./pages/SendMoney";
import HelpPage from "./pages/HelpPage";
import SignUp from "./pages/SignUp";
import FqasPage from "./pages/FqasPage";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Transactions from "./pages/Transactions";
import UsersList from "./pages/UsersList";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import Cabins from "./pages/Reviews";
import TransactionsHistory from "./pages/TransactionsHistory";
import Countries from "./pages/Countries";
import Banks from "./pages/Banks";
// import ProtectedDashboard from './utils/ProtectedDashboard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 60 * 0,
    },
  },
});

function App() {

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <GoogleOAuthProvider clientId="82341067486-2ale8f152hg3as25d8kutml661nm4kcb.apps.googleusercontent.com">
          <BrowserRouter>
            <Routes>
              <Route element={<UserLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="reviews" element={<HelpPage />} />
                <Route element={<ProtectedRoute role="user" />}>
                  <Route path="send" element={<SendMoney />} />
                  <Route
                    path="transactions/users"
                    element={<TransactionsHistory />}
                  />
                </Route>
                <Route path="fqas" element={<FqasPage />} />
                <Route path="*" element={<PageNotFound />} />

                <Route element={<AppLayout />}>
                  <Route element={<ProtectedRoute role="admin" />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route
                      path="transactions/:TransactionId"
                      element={<Booking />}
                    />
                    <Route
                      path="confirm/:TransactionId"
                      element={<Checkin />}
                    />
                    <Route path="all-users" element={<UsersList />} />
                    <Route path="all-reviews" element={<Cabins />} />
                    <Route path="users" element={<Users />} />
                    <Route path="charges" element={<Settings />} />
                    <Route path="countries" element={<Countries/>} />
                    <Route path="account" element={<Account />} />
                    <Route path="banks" element={<Banks />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route
                path="/:userId/verify/:token"
                element={<VerifyEmailPage />}
              />
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
