import React, { Suspense } from "react";
import { StreamCreationFormPagePath, StreamDetailsPagePath } from "../paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const StreamCreationForm = React.lazy(() =>
  import("../../components/pages/StreamCreationForm")
);

const StreamDetails = React.lazy(() =>
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
            key="VerifyPage"
            path={StreamCreationFormPagePath()}
            element={withSuspenseComponents(<StreamCreationForm />)}
          />
          <Route
            key="ConfirmPage"
            path={StreamDetailsPagePath()}
            element={withSuspenseComponents(<StreamDetails />)}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
