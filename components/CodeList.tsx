import CodeSnippet from "@/islands/CodeSnippet.tsx";
interface OneLiner {
  id: number;
  status: "published" | "draft" | "archived";
  sort: number;
  title: string;
  description: string | null;
  code: string;
}

interface CodeListProps {
  oneLiners: OneLiner[];
}

const CodeList = (props: CodeListProps) => {
  const { oneLiners } = props;

  return (
    <div className="max-w-3xl mx-auto px-8 my-10 ">
      <div className="space-y-10 ">
        {oneLiners.map((oneLiner, index) => (
          <div key={oneLiner.id} className="space-y-4">
            <h2 className="text-2xl font-bold ">
              {index + 1}
              {". "}
              {oneLiner.title}
            </h2>
            <CodeSnippet code={oneLiner.code} lang="javascript" />
            <p>{oneLiner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeList;
