import * as React from "react";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { Avatar, Button } from "react-daisyui";

const TimerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [picData, setPicData] = useState("");
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  function checkIn() {
    let yourDate = new Date();
    let dateTime = yourDate.toISOString().split("T")[0];
    setIsLoading(true);
    let canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;

    let ctx = canvas.getContext("2d");
    ctx!.fillStyle = "#F6F3E4";
    ctx!.fillRect(0, 0, 1280, 720);

    ctx!.fillStyle = "#0E4F55";
    ctx!.font = "bold 128px sans-serif";
    ctx!.fillText(`${dateTime}`, 76, 340);

    ctx!.fillStyle = "#34B982";
    ctx!.font = "bold 96px sans-serif";
    ctx!.fillText(`${hours}:${minutes}:${seconds}`, 76, 463);

    setPicData(canvas.toDataURL());
    setIsLoading(false);
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

        <div className="mt-4">
          <p className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900">
            {hours}:{minutes}:{seconds}
          </p>
          <Button onClick={start}>Start</Button>
          <Button className="ml-4" onClick={pause}>
            Pause
          </Button>
        </div>

        <Button loading={isLoading} onClick={checkIn} className="mt-4">
          生成打卡图片
        </Button>
        <img src={picData} className="mt-4 w-10/12 h-auto shadow-md" />
      </div>
    </main>
  );
};

export default TimerPage;
