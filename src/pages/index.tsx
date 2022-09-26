import * as React from "react";
import type { HeadFC } from "gatsby";
import { Button, Navbar, Hero } from "react-daisyui";

const IndexPage = () => {
  return (
    <main className="w-full">
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Navbar>
          <div className="flex-none">
            <Button shape="square" color="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
          <div className="flex-1">
            <Button className="text-xl normal-case" color="ghost">
              Leucas is here
            </Button>
          </div>
          <div className="flex-none">
            <Button shape="square" color="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </Button>
          </div>
        </Navbar>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://api.lorem.space/image/game?w=150&h=150"
              alt="Man looking at item at a store"
            ></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              来都来了
            </a>
            <p className="mt-2 text-slate-500">
              最近我在学前端开发，这个站点是用Gatsby + tailwind CSS 创建的。
              以后这个站点应该会放一些个人介绍还有我的App产品之类的东西。
              记得下次再来看看哈。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
