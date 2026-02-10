import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { initI18n, LANGUAGES } from "@repo/i18n-config";
import { initApiClient } from "@repo/api-client";
import { createQueryClient } from "@repo/api-client/create-query-client";
import { QueryProvider } from "@repo/api-client/query-provider";

import type { Route } from "./+types/root";
import "./app.css";
import { useState } from "react";

// Initialize API client
initApiClient(import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api");

// Initialize i18n with Serbian Latin as default
initI18n(LANGUAGES.SR_LATN);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={LANGUAGES.SR_LATN}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>FIS</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [queryClient] = useState(() =>
    createQueryClient()
  );
  return (
    <QueryProvider client={queryClient}>
      <Outlet />
    </QueryProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
