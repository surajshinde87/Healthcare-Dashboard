const chartData = [
  [
    { color: "gray", height: 6.25 },
    { color: "teal", height: 3.125, marginBottomPercent: 60 },
    { color: "gray", height: 2.5, split: true, marginBottomPercent: 30 },
    { color: "gray", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { split: true, colors: ["teal", "blue"], height: 6.25 },
    { color: "blue", height: 3.125, marginBottomPercent: 60 },
    { color: "gray", height: 3.125, split: true, marginBottomPercent: 30 },
    { color: "teal", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { color: "gray", height: 6.25 },
    { color: "gray", height: 3.125, marginBottomPercent: 60 },
    { split: true, colors: ["teal", "blue"], height: 3.125, marginBottomPercent: 30 },
    { color: "blue", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { color: "gray", height: 6.25, split: true },
    { color: "teal", height: 3.125, marginBottomPercent: 60 },
    { split: true, colors: ["teal", "blue"], height: 3.125, marginBottomPercent: 30 },
    { color: "gray", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { color: "gray", height: 6.25 },
    { color: "blue", height: 3.125, marginBottomPercent: 60 },
    { color: "gray", height: 3.125, split: true, marginBottomPercent: 30 },
    { color: "gray", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { split: true, colors: ["teal", "blue"], height: 6.25 },
    { color: "teal", height: 3.125, marginBottomPercent: 60 },
    { color: "gray", height: 3.125, split: true, marginBottomPercent: 30 },
    { color: "blue", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { color: "gray", height: 6.25 },
    { color: "gray", height: 3.125, marginBottomPercent: 60 },
    { split: true, colors: ["teal", "blue"], height: 3.125, marginBottomPercent: 30 },
    { color: "blue", height: 1.875, marginBottomPercent: 10 },
  ],
  [
    { color: "gray", height: 6.25, split: true },
    { color: "teal", height: 3.125, marginBottomPercent: 60 },
    { color: "gray", height: 3.125, split: true, marginBottomPercent: 30 },
    { color: "blue", height: 1.875, marginBottomPercent: 10 },
  ],
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export {chartData, days}