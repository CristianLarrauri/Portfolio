import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  const theme = {
    dark: ["#1f1f20", "#0a3069", "#0969da", "#54aeff", "#b6e3ff"],
  };
  return (
    <div className="flex justify-center p-10 text-grisClaro-0">
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
