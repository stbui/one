import { Controller, Get } from "@stbui/one-platform-node";

@Controller("/custom/available")
export class CustomAvailable {
  constructor() {}

  @Get()
  index() {
    return { message: "CustomAvailable" };
  }
}
