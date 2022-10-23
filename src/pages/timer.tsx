import * as React from "react";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { Avatar, Button } from "react-daisyui";

function MyStopwatch() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div className="mt-4">
      <p className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900">
        {hours}:{minutes}:{seconds}
      </p>
      <Button onClick={start}>Start</Button>
      <Button className="ml-4" onClick={pause}>
        Pause
      </Button>
    </div>
  );
}

const TimerPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  function checkIn() {
    console.log("good");
    setIsLoading(true);
    fetch(
      "https://rest.apitemplate.io/v2/create-image?template_id=48377b2379933e10",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "433eOTI4ODo2MzI3OnVoZFpQZGdIbG5DTXU3VXo",
        },
        body: JSON.stringify({
          overrides: [
            {
              name: "text_1_1_1",
              text: "2022-10-24",
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.download_url);
          window.location.href = result.download_url;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <main className="w-screen">
      <div className="flex w-full flex-col items-center">
        <h1 className="mt-4 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Go West
          </span>
          学时打卡
        </h1>
        <p className="ml-4 mr-4 mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          形式上意思意思😅
          学习30分钟可生成打卡图片，然后发到群里，意思就是今天学过了。
        </p>
        <Avatar
          src="/img/group_icon.png"
          border
          borderColor="primary"
          shape="circle"
          size="lg"
        />

        <MyStopwatch />

        <Button loading={isLoading} onClick={checkIn} className="mt-4">
          生成打卡图片
        </Button>
      </div>
    </main>
  );
};

export default TimerPage;
