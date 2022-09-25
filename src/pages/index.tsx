import * as React from "react";
import type { HeadFC } from "gatsby";
import { Button, Navbar, Footer, Hero } from "react-daisyui";

const IndexPage = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <main className="max-w-5xl m-auto">
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

      <Hero>
        <Hero.Content>
          <img
            src="https://api.lorem.space/image/book?w=260&h=400"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">来都来了</h1>
            <p className="py-6">
              最近我在学前端开发，这个站点是用Gatsby + tailwind CSS 创建的。
              <br></br>
              以后这个站点应该会放一些个人介绍还有我的App产品之类的东西。
              <br></br>
              记得下次再来看看哈。
            </p>
            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>

    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
