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

        <meta property="og:url" content="https://one-liner-js.deno.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="One-Liner JavaScript Snippets" />
        <meta
          property="og:description"
          content="A collection of one-liner JavaScript snippets for your next project"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="One-Liner JavaScript Snippets" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="one-liner-js.deno.dev" />
        <meta property="twitter:url" content="https://one-liner-js.deno.dev/" />
        <meta name="twitter:title" content="One-Liner JavaScript Snippets" />
        <meta
          name="twitter:description"
          content="A collection of one-liner JavaScript snippets for your next project"
        />
        <meta name="twitter:image" content="/og.jpg" />

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
        <div class="w-full justify-center md:justify-end md:sticky bottom-0 flex gap-2 items-center">
          {/* for github */}
          <a
            href="https://github.com/probir-sarkar/one-liner-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="28"
              height="28"
              src="/github-mark.svg"
              alt="GitHub Repository"
            />
          </a>

          <a
            href="https://fresh.deno.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
