import { readFileSync } from "fs";
import {parseJSON} from 'misc-utils-of-mine-generic'

export function parseJSONFile(file:string): any{
  const s = readFileSync(file).toString()
  return parseJSON(s)
}