export class headers {
  private headers!: Map<string, string[]>;

  constructor(headers?: string | { [name: string]: string | string[] }) {
    if (!headers) {
      this.headers = new Map<string, string[]>();
    } else if (typeof headers === "string") {
    } else {
    }
  }

  has() {}
  get(name: string): string | null {
    return;
  }
  set(name: string, value: string | string[] | number | boolean) {}
  keys() {}
  append(name: string, value: string | string[]) {}
  delete(name: string, value: string | string[] | number | boolean) {}
}
