import { useEffect } from "preact/hooks";
import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({ code }: CodeSnippetProps) => {
  useEffect(() => {
    // Highlight all code blocks
    hljs.highlightAll();
  }, []);

  // Generate highlighted HTML for the given code
  const html = hljs.highlight(code, { language: "javascript" }).value;

  return (
    <pre>
      <code class={`hljs language-javascript`} dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

export default CodeSnippet;
