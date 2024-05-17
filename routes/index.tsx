import CodeList from "@/components/CodeList.tsx";
import { getOneLiners } from "@/utils/actions.ts";

export default async function Home() {
  const oneLiners = await getOneLiners();
  if (!oneLiners.success || !oneLiners.data) {
    return <div>Error fetching one-liners</div>;
  }

  return (
    <>
      <header class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">
            One-Liner JavaScript Snippets
          </h1>
          <p class="my-4">
            A collection of one-liner JavaScript snippets for your next project
          </p>
        </div>
      </header>
      <main>
        <CodeList oneLiners={oneLiners.data} />
      </main>
    </>
  );
}
