export function unixTimestampInSeconds(): number {
  return Math.floor(new Date().getTime() / 1000);
}
