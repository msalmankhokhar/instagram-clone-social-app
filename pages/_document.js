import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-mode="light">
      <Head />
      <body className="dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}