import { Controller, Get, Module } from "@stbui/one-common";
import { Runner } from "@stbui/one-core";

@Controller("/custom")
export class CustomController {
  constructor() {}

  @Get("/monitor")
  monitor(req, res) {
    return { message: "CustomMonitor" };
  }

  @Get("/available")
  available(req, res) {
    return { message: "CustomMonitor" };
  }
}

@Module({
  controllers: [CustomController],
})
class App {}

Runner.run(App);
