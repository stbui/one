import { Controller, Get } from "@stbui/one-platform-node";

@Controller("/home")
export class Home {
  constructor() {}

  @Get()
  index() {
    console.log("home");
    return { message: "home" };
  }
}
