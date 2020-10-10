import { Controller, Get } from "../core";

@Controller()
export class App {
  constructor() {}

  @Get()
  index() {
    console.log("default");
    return { message: "default" };
  }
}
