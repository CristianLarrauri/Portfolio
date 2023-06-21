import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  // const theme = {
  //   dark: ["#1f1f20", "#84a5d4", "#5281be", "#2c5c9f", "#1d3f7c"],
  // };
  return (
    <div className="flex justify-center p-10 text-grisClaro-0">
      <GitHubCalendar
        username="CristianLarrauri"
        blockSize={15}
        blockMargin={5}
        fontSize={14}
        // theme={theme}
      />
    </div>
  );
}
