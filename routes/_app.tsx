import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en" />
        <meta
          name="description"
          content="A collection of one-liner JavaScript snippets for your next project"
        />
        <meta
          name="keywords"
          content="programming, code, snippets, one-liners,javascript"
        />

        <title>One-Liner JavaScript Snippets</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
        >
        </link>
        {
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css"
          />
        }
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
