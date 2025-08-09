enum Colors {black, brown, red, orange, yellow, green, blue, violet, grey, white};

type Color = Exclude<keyof typeof Colors, number>;

export function decodedValue(colors: Color[]): number {
  return Number(`${Colors[colors[0]] }${Colors[colors[1]] }`);
}
