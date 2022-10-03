import * as React from "react";
import type { HeadFC } from "gatsby";
import { Artboard, Avatar, Button } from "react-daisyui";

const IndexPage = () => {
  return (
    <main className="w-screen">
      <div className="w-full flex h-screen">
        <Artboard>
          <p>
            羊会爬水坝的，马上要爬到顶上的时候。一个老鹰过来
            推了他一下。然后羊没站稳掉下去摔死了。 <br/>牛的故事是一样的。
          </p>
        </Artboard>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Leucas|Home</title>;
