import React, { lazy, Suspense } from "react";

const LazyEvent = lazy(() => import("./Event"));

const Event = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyEvent {...props} />
  </Suspense>
);

export default Event;
