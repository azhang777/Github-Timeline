import Image from "next/image";
import Search from "../components/search";
import Button from "../components/button";
import githubIcon from "../../public/github-mark-white.png";
import Link from "next/link";
import { Wrapper } from "@/components/wrapper";
export default function Home() {
  //localhost:3000/start
  http: return (
    <div>
      {/*Mobile View */}
      <div className="block md:hidden">
        <div className="flex min-h-screen md:hidden">
          <div className="w-2/6 flex-none bg-black">
            <Wrapper margin="2" backgroundColor="stone-900"></Wrapper>
          </div>
          <div className="flex-grow bg-black">
            <Wrapper margin="2" backgroundColor="stone-900"></Wrapper>
          </div>
        </div>
      </div>
      {/*Desktop View */}
      <div className="hidden md:block">
        <div className="flex min-h-screen">
          <div className="w-1/6 flex-none bg-black">
            <Wrapper margin="2" backgroundColor="stone-900"></Wrapper>
          </div>
          <div className="flex-grow bg-black">
            <Wrapper margin="2" backgroundColor="stone-900"></Wrapper>
          </div>
          <div className="w-1/6 flex-none bg-black">
            <Wrapper margin="2" backgroundColor="stone-900"></Wrapper>
          </div>
        </div>
      </div>
      <footer className="mt-2 min-w-full text-center text-xs">
        (This is not an official GitHub tool)
      </footer>
    </div>
    //make timelines exportable like yearly apple/spotify review`
    // <div className="flex min-h-screen flex-col">
    //   {/* Top Section - Header */}
    //   <header className="mx-20 flex justify-between p-14">
    //     <Image src={githubIcon} width={53} alt="some image" />
    //     {/*This button should have two different functionalities, one sign up/sign in to redirect to appropriate page and one account to redirect to account page */}
    //     <Button>
    //       {/* border-gray-200 bg-white text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 */}
    //       Sign In
    //     </Button>
    //   </header>
    //   <Wrapper margin="4" backgroundColor="black">
    //     <h1 className="text-xl font-bold">Welcome to the Home Page</h1>
    //     <p>This is a sample content wrapped in the Wrapper component.</p>
    //   </Wrapper>
    //   {/* Middle Section - Main Content */}
    //   <main className="flex flex-grow items-center justify-center">
    //     <div className="mt-auto flex w-11/12 justify-center">
    //       {/* Content goes here */}
    //       <Search />
    //     </div>
    //   </main>

    //   {/* Bottom Section - Footer */}
    //   <footer className="p-4 text-center text-xs text-white">
    //     (This is not an official GitHub tool)
    //   </footer>
    // </div>
  );
}

{
  /*
      <div className="">
      <header className="flex justify-between p-10">
      </header>
      <main className="flex h-full w-full justify-center">
        <Search />
      </main>
    </div>
  */
}
{
  /*
   <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:size-auto lg:bg-none dark:from-black dark:via-black">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div>
  */
}
