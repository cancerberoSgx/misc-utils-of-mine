export function shorter(text: string, much: number = 10): string {
  return text.trim().substring(0, Math.min(text.length, much)) + '...'
}
