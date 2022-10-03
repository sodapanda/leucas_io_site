import * as React from "react";
import type { HeadFC } from "gatsby";
import { Avatar, Button, Divider } from "react-daisyui";

const IndexPage = () => {
  return (
    <main className="w-screen md:max-w-md md:mx-auto">
      <div className="flex flex-col  mx-auto w-full">
        <div className="flex flex-row items-center bg-cyan-600">
          <Avatar
            src="/img/fastgear.png"
            border
            borderColor="primary"
            shape="circle"
            size="sm"
            className="m-2"
          />

          <div className="flex flex-col">
            <p className="text-white text-lg font-bold">FastGear</p>
            <p className="text-white text-xs font-light">
              The only app you need to master manual car driving
            </p>
          </div>
        </div>

        <p className="text-4xl font-bold text-center mt-4">
          Clutch control with
          <br /> confidence
        </p>

        <p className="text-xs mx-4 font-light text-black">
          FastGear makes it easy for learners to shift gear smoothly and fast -
          and never stall again.😰➡️😋
        </p>

        <div className="bg-emerald-200 m-4 rounded-l-full flex items-center">
          <Avatar
            src="/img/happy_user.jpg"
            border
            borderColor="primary"
            shape="circle"
            size="sm"
            className="m-2"
          />
          <p className="text-black text-xs font-light mx-2">
            With FastGear, it takes me only 2 days to master gear shifting and
            clutch control.
          </p>
        </div>

        <div className="mx-auto w-full aspect-video px-4">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/vEn3C4rsYs0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Divider />
        <p className="text-lg mx-4 font-bold">With FastGear you get:</p>
        <div className="text-sm mx-4 mt-2">🚀 Faster Gear shifts</div>
        <div className="text-sm mx-4 mt-2">🛝 Drive smoothly</div>
        <div className="text-sm mx-4 mt-2">🔔 Engine Stall Warning</div>
        <div className="text-sm mx-4 mt-2">🛞 Visual rev-matching</div>
        <div className="h-20 mt-2"></div>
      </div>
      <Button
        href="https://play.google.com/store/apps/details?id=link.shuidada.fastgear"
        responsive
        size="lg"
        color="success"
        className="fixed bottom-0  w-full md:max-w-md md:mx-auto"
      >
        Get Started
      </Button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>FastGear|The only app you need to master manual car driving</title>
);
