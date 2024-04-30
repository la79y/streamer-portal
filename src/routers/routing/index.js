import React, { Suspense } from "react";
import {
  EmailVerificationPagePath,
  LoginPagePath,
  ResetPasswordPagePath,
  SignupPagePath,
  StreamCreationFormPagePath,
  StreamDetailsPagePath,
  StreamsOfStreamerPath,
} from "../paths";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "../../components/Header";

const LoginPage = React.lazy(() => import("../../components/pages/Login"));

const SignupPage = React.lazy(() => import("../../components/pages/Signup"));

const StreamCreationFormPage = React.lazy(() =>
  import("../../components/pages/StreamCreationForm")
);

const StreamDetailsPage = React.lazy(() =>
  import("../../components/pages/StreamDetails")
);

const EmailVerificationPage = React.lazy(() =>
  import("../../components/pages/EmailVerification")
);

const ResetPasswordPage = React.lazy(() =>
  import("../../components/pages/ResetPassword")
);

const StreamsOfStreamerPage = React.lazy(() =>
  import("../../components/pages/StreamsOfStreamer")
);

const withSuspense = (WrappedComponent) => {
  return (
    <Suspense>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export default function Routing() {
  function MainLayout() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }

  const ProtectedRoute = () => {
    const token = localStorage.getItem("userId"); // Adjust according to where you store the token
    if (!token) {
      return <Navigate to={LoginPagePath()} replace />;
    }
    return <Outlet />;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {/* Authentication Routes */}
          <Route
            key="LoginPage"
            path={LoginPagePath()}
            element={withSuspenseComponents(<LoginPage />)}
          />
          <Route
            key="SignupPage"
            path={SignupPagePath()}
            element={withSuspenseComponents(<SignupPage />)}
          />
          <Route
            key="EmailVerificationPage"
            path={EmailVerificationPagePath()}
            element={withSuspenseComponents(<EmailVerificationPage />)}
          />
          <Route
            key="ResetPasswordPage"
            path={ResetPasswordPagePath()}
            element={withSuspenseComponents(<ResetPasswordPage />)}
          />

          {/* Default route to StreamCreationPage */}
          <Route
            path="/"
            element={<Navigate replace to={StreamCreationFormPagePath()} />}
          />

          {/* Routes within MainLayout */}
          <Route element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route
                key="StreamCreationPage"
                path={StreamCreationFormPagePath()}
                element={withSuspenseComponents(<StreamCreationFormPage />)}
              />
              <Route
                key="StreamDetailsPage"
                path={StreamDetailsPagePath()}
                element={withSuspenseComponents(<StreamDetailsPage />)}
              />
              <Route
                key="StreamsOfStreamerPage"
                path={StreamsOfStreamerPath()}
                element={withSuspenseComponents(<StreamsOfStreamerPage />)}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
