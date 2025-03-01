import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { MDXProvider } from "@mdx-js/react";
import type { ComponentProps, ComponentType } from "react";

import type { Route } from "./+types/root";
import "./app.css";

const mdxComponents: Record<string, ComponentType<ComponentProps<any>>> = {
  h1: (props) => (
    <h1
      className="text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 font-bold"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-3xl md:text-4xl mt-12 mb-6 text-gray-800 dark:text-gray-200 font-bold"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-2xl md:text-3xl mt-8 mb-4 text-gray-700 dark:text-gray-300 font-bold"
      {...props}
    />
  ),
  p: (props) => <p className="text-gray-600 dark:text-gray-400 mb-6" {...props} />,
  ul: (props) => <ul className="space-y-2 list-none mb-6" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-6" {...props} />,
  li: (props) => <li className="relative pl-6 hover:translate-x-1 transition-transform duration-200" {...props} />,
  a: (props) => (
    <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-6 text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  code: (props) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-6 shadow-sm" {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
  ),
  th: (props) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap" {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300" {...props} />
  ),
  tbody: (props) => <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-900" {...props} />,
};

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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
  return (
    <MDXProvider components={mdxComponents}>
      <Outlet />
    </MDXProvider>
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
