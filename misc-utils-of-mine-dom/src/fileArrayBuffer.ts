
export async function readImageUrlToUintArray(url: string): Promise<Uint8Array> {
  let fetchedSourceImage = await fetch(url)
  let arrayBuffer = await fetchedSourceImage.arrayBuffer()
  let sourceBytes = new Uint8Array(arrayBuffer)
  return sourceBytes
}

export async function inputFileToUint8Array(el: HTMLInputElement): Promise<{ file: File, content: Uint8Array }[]> {
  return Promise.all(inputFileFiles(el).map(async file => {
    const array = await new Promise<Uint8Array>(resolve => {
      const reader = new FileReader()
      reader.addEventListener('loadend', (e) => {
        resolve(new Uint8Array(reader.result as any))
      })
      reader.readAsArrayBuffer(file)
    })
    return { file, content: array }
  }))
}

export function inputFileFiles(el: HTMLInputElement): File[] {
  const files: File[] = []
  if (el.files) {
    for (let i = 0; i < el.files.length; i++) {
      const file = el.files.item(i)
      if (file) {
        files.push(file)
      }
    }
  }
  return files
}

export function stringToUInt8Array(s: string): Uint8Array {
  var enc = new TextEncoder() // always utf-8
  return enc.encode(s)
}

