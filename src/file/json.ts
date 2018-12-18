import { readFileSync } from "fs";
import { parseJSON } from "../string/json";

export function parseJSONFile(file:string): any{
  const s = readFileSync(file).toString()
  return parseJSON(s)
}