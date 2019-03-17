import { statSync } from 'fs';
import {bytesToKiloBytes} from 'misc-utils-of-mine-generic'

export function getFileSizeInBytes(filename: string, unit: 'bytes' | 'mega-bytes' | 'kilo-bytes' = 'bytes') {
  const stats = statSync(filename)
  const fileSizeInBytes = stats.size
  return unit === 'bytes' ? fileSizeInBytes : unit === 'mega-bytes' ? fileSizeInBytes / 1000000.0 : unit === 'kilo-bytes' ? bytesToKiloBytes(fileSizeInBytes) : fileSizeInBytes
}