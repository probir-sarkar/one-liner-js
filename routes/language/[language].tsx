// import ... from 'https://unpkg.com/@speed-highlight/core/dist/index.js'

import { FreshContext } from "$fresh/server.ts";
import CodeSnippet from "../../islands/CodeSnippet.tsx";
interface OneLiner {
  id: number;
  status: "published" | "draft" | "archived";
  sort: number;
  title: string;
  description: string | null;
  code: string;
}
interface Language {
  id: number;
  name: string;
}

async function getOneLinersByLanguage(
  language: string,
) {
  try {
    const languageResponse = await fetch(
      `https://directus.probir.dev/items/programming_languages?filter[name][_istarts_with]=${language}`,
    );

    if (!languageResponse.ok) {
      return { success: false, message: "Error fetching language" };
    }

    const languageData = await languageResponse.json();

    if (!languageData || !languageData.data || languageData.data.length === 0) {
      return { success: false, message: "Language not found" };
    }

    const languageId = languageData.data[0].id;

    const oneLinersResponse = await fetch(
      `https://directus.probir.dev/items/one_liner?filter[status][_eq]=published&filter[language][_eq]=${languageId}`,
    );

    if (!oneLinersResponse.ok) {
      return { success: false, message: "Error fetching one-liners" };
    }

    const oneLinersData = await oneLinersResponse.json();

    return { success: true, data: oneLinersData.data as OneLiner[] };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: `Internal Server Error: ${error.message}`,
    };
  }
}

const ProjectPage = async (_req: Request, ctx: FreshContext) => {
  const { language } = ctx.params;

  const oneLiners = await getOneLinersByLanguage(language);

  if (!oneLiners.success || !oneLiners.data) {
    return <div>{oneLiners.message}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-8">
      <div>Hello {ctx.params.language}</div>
      {oneLiners.data.map((oneLiner) => (
        <div key={oneLiner.id}>
          <h2>{oneLiner.title}</h2>
          <p>{oneLiner.description}</p>
          <CodeSnippet code={oneLiner.code} language={language} />
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
