import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  const theme = {
    dark: ["#1f1f20", "#0a3069", "#0969da", "#54aeff", "#b6e3ff"],
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center text-grisClaro-0">
      <h1 className="h-full w-full p-10 text-2xl text-lilaClaro-0">
        GitHub Calendar
      </h1>
      <GitHubCalendar
        username="CristianLarrauri"
        blockSize={15}
        blockMargin={5}
        fontSize={14}
        theme={theme}
      />
    </div>
  );
}
