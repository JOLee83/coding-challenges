export const oddOrEven = (arr: number[]): string => arr.reduce((a: number, c: number) => a + c, 0) % 2 === 0 ? 'even' : 'odd';
