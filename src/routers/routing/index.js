import React, { Suspense } from "react";
import {
  LoginPagePath,
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
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
