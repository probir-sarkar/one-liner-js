import Prism from "https://esm.sh/prismjs@1.29.0";

interface Props {
  code: string;
  lang: string;
}

export default function Code({ code, lang }: Props) {
  const parsed = Prism.highlight(code, Prism.languages[lang], lang);

  return (
    <pre data-lang={lang} className={`language-${lang}`}>
      <code
        dangerouslySetInnerHTML={{
          __html: parsed,
        }}
      />
    </pre>
  );
}
