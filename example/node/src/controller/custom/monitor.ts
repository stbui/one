import { Controller, Get, Proxy } from "@stbui/one-platform-node";

@Controller("/custom/monitor")
export class CustomMonitor {
  constructor() {}

  @Get()
  @Proxy({
    target: "http://www.example.org",
  })
  index(req, res) {
    return { message: "CustomMonitor" };
  }
}
