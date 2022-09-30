import Prism from "prismjs";

type CodeProps = {
  children: string;
  lang?: string;
};
export function Code({ children, lang = "markup" }: CodeProps) {
  const code = Prism.highlight(children, Prism.languages[lang], lang);
  return (
    <pre className={`language-${lang}`}>
      <code
        className={`language-${lang}`}
        dangerouslySetInnerHTML={{ __html: code }}
      ></code>
    </pre>
  );
}
export default Code;

export function InlineCode({ children, lang = "markup" }: CodeProps) {
  const code = Prism.highlight(children, Prism.languages[lang], lang);
  return (
    <code
      className={`language-${lang}`}
      dangerouslySetInnerHTML={{ __html: code }}
    ></code>
  );
}
