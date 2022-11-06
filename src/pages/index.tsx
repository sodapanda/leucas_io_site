import * as React from "react";
import type { HeadFC } from "gatsby";
import { Avatar, Button } from "react-daisyui";

const IndexPage = () => {
  return (
    <main className="w-screen">
      <div className="w-full flex h-screen">
        <div className="w-full m-auto flex flex-col items-center">
          <Avatar
            src="/img/leucas_channel_logo_1.png"
            border
            borderColor="primary"
            shape="circle"
            size="lg"
          />
          <p className="w-5/6 mt-6 md:w-1/3">
            😎 Indie developer
            <br />
            💸 Solopreneurs
            <br />
            👨‍💻 I build (Android | iOS | Web) Apps
            <br />
          </p>
          <Button href="https://twitter.com/leucasio" className="mt-6 w-5/6 md:w-1/3">
            Twitter
          </Button>
          <Button href="https://blog.leucas.io/" className="mt-6 w-5/6 md:w-1/3">
            Blog
          </Button>
          <Button href="/fastgear/" className="mt-4 w-5/6 md:w-1/3">
            FastGear
          </Button>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Leucas|Home</title>;
