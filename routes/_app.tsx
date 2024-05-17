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
          href="https://esm.sh/prismjs@1.29.0/themes/prism.min.css"
        >
        </link>
        {
          <link
            rel="stylesheet"
            href="https://esm.sh/wysiwyg.css/wysiwyg.css"
          >
          </link>
        }
      </head>
      <body>
        <Component />
        <a class="float-end sticky bottom-0" href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </body>
    </html>
  );
}
