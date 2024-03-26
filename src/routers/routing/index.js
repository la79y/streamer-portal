import React, { Suspense } from "react";
import {
  EmailVerificationPagePath,
  LoginPagePath,
  ResetPasswordPagePath,
  SignupPagePath,
  StreamCreationFormPagePath,
  StreamDetailsPagePath,
} from "../paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
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
            key="EmailVerificationPage"
            path={EmailVerificationPagePath()}
            element={withSuspenseComponents(<EmailVerificationPage />)}
          />
          <Route
            key="ResetPasswordPage"
            path={ResetPasswordPagePath()}
            element={withSuspenseComponents(<ResetPasswordPage />)}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
