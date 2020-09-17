export class G964 {
  public static maxRot(n: number): number {
    let max: number = n;
    let str: string = n.toString();

    for (let i: number = 0; i < str.length; i++) {
      str = str.slice(0, i) + str.slice(i + 1) + str.slice(i, i + 1);
      max = +str > max ? +str : max;
    }

    return max;
  }
}
