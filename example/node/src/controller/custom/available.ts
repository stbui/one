import { Controller, Get } from "../../core";

@Controller("/custom/available")
export class CustomAvailable {
  constructor() {}

  @Get()
  index() {
    return { message: "CustomAvailable" };
  }
}
