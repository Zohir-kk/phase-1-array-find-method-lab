// code your solution here
function superbowlWin(record) {
  return record.find((element) => element.result === "W")
    ? record.find((element) => element.result === "W").year
    : undefined;
}