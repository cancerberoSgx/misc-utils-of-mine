export function quote(s:string, q:string='"'):string {
  return q+s.replace(new RegExp(q, 'g'), '\\'+q)+q
}

