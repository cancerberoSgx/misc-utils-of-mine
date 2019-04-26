/** Simpler event emitter. */
export class Emitter<E = any, L extends (e: E) => void = (e: E) => void> {
  private l: L[] = []
  add(l: L) {
    this.l.push(l)
  }
  emit(e: E) {
    this.l.forEach(l => l(e))
  }
}
