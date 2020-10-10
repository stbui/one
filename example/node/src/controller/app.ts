import { Controller, Get } from "@stbui/one-platform-node";

@Controller()
export class App {
  constructor() {}

  @Get()
  index() {
    console.log("default");
    return { message: "default" };
  }
}
