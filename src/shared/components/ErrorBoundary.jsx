"use client";

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return <div className="p-4 text-red-500"> Hata: {error.message}</div>;
}

export default function CustomErrorBoundary({ children }) {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
}
