function getScriptResults(
  year: string,
  day: string,
  scriptNumber: "01" | "02"
): string {
  const script = require(`../scripts/script${year}${day}${scriptNumber}`);

  console.log(script.script());

  return `${script.script()}`;
}

export default getScriptResults;
