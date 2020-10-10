import { Controller, Get } from "../core";

@Controller("/home")
export class Home {
  constructor() {}

  @Get()
  index() {
    console.log("home");
    return { message: "home" };
  }
}
