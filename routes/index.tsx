import { join } from "$std/path/mod.ts";
import {  render } from "$gfm";

export default async function Home() {
  const code = await Deno.readTextFile(join(Deno.cwd(), "README.md"));

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
      <main className=" w-10/12 xl:max-w-4xl my-12 mx-auto ">
        <div
         data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: render(code) }}
        >
        </div>
      </main>
    </>
  );
}
