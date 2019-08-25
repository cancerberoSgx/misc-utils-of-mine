import { lineBreak } from "../lineBreak"

describe('string/lineBreak', () => {

  it('lineBreak', () => {
    let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It w as popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    expect(lineBreak(str, 40).trim()).toBe(`
Lorem Ipsum is simply dummy text of the
printing and typesetting industry.
Lorem Ipsum has been the industry's
standard dummy text ever since the
1500s, when an unknown printer took a
galley of type and scrambled it to make
a type specimen book. It has survived
not only five centuries, but also the
leap into electronic typesetting,
remaining essentially unchanged. It w
as popularised in the 1960s with the
release of Letraset sheets containing
Lorem Ipsum passages, and more recently
with desktop publishing software like
Aldus PageMaker including versions of
Lorem Ipsum.
  `.trim())
  })
})
