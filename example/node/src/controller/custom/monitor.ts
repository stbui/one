import { Controller, Get, Proxy } from "../../core";

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
