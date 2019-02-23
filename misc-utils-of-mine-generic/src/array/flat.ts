
export function flattenDeep<T=any>(arr1: (T[][] | T[])): T[] {
  return (arr1 as any[]).reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
} 
