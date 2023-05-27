import _ from "lodash";

export function convertToCamelCase(sentence: string): string {
  const words = sentence.split(" ");
  const camelCaseWord = _.camelCase(words.join(" "));
  return camelCaseWord;
}
