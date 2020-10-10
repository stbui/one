import "reflect-metadata";
import { metadata } from "./constants";
import { Command } from "./Command";

export class Container {
  private args: any;

  constructor(commands) {
    this.args = Command();
    this.resolve(commands);
  }

  static run(commands) {
    return new Container(commands);
  }

  private resolve(commands) {
    commands.forEach((command) => {
      const indentifier = Reflect.getMetadata(
        metadata.COMMAND_IDENTIFIER,
        command
      );

      if (this.args.input === indentifier) {
        let factory = new command();
        const options = Reflect.getMetadata(
          metadata.OPTION_IDENTIFIER,
          command
        );
        options.forEach((option) => {
          const input = this.args.flags;
          const value = input[`--${option.name}`];

          if (value) {
            factory[option.methodName](value, {
              command: indentifier,
              options,
              instance: factory,
            });
          }
        });

        const run = Reflect.getMetadata(metadata.ACTION_IDENTIFIER, command);
        if (run) {
          factory[run]();
        }
      }
    });
  }
}
