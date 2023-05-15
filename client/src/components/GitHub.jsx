import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  const theme = {
    dark: ["#A1A1AA80", "#c2d1e8", "#8297c9", "#4b5d8e", "#2b4c7e"],
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
