export function duplicateCount(text: string): number {
  const textArr: string[] = text.toLowerCase().split('');
  const uniqueArr: string[] = [...new Set(textArr)]
  let count: number = 0;

  if (uniqueArr.length === textArr.length) {
    return count;
  }

  uniqueArr.forEach((x: string) => {
    const filteredArr: string[] = textArr.filter(y => y !== x);
    if (filteredArr.length < text.length - 1) {
      count++
    }
  });

  return count;
}