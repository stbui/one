import { Command, Option, Action, Container } from "@stbui/one-cli";
//
export class Common {
  @Option({ name: "version", alias: "v", description: "version" })
  asversion(value, cmd) {
    console.log("output version", cmd.instance.version);
  }

  @Option({ name: "help", alias: "h", description: "help" })
  ashelp(value, cmd) {
    console.log("cli");
    console.log("");
    console.log(`  ${cmd.command} \<command\> -- description`);
    console.log("");

    cmd.options.forEach((option) => {
      console.log(
        `    --${option.name} -${option.alias} \<option\> -- ${option.description}`
      );
    });

    console.log("");
  }
}

@Command("webpack")
export class Webpack extends Common {
  public version = "1.1.1";

  // @Option({ name: "version", alias: "v", description: "version" })
  // version(value) {
  //   console.log("output version", "v1.0.0");
  // }
  // @Option({ name: "help", alias: "h", description: "help" })
  // help(value, cmd) {
  //   console.log("cli");
  //   console.log("");
  //   console.log(`  ${cmd.command} \<command\> -- description`);
  //   console.log("");
  //   cmd.options.forEach((option) => {
  //     console.log(
  //       `    --${option.name} -${option.alias} \<option\> -- ${option.description}`
  //     );
  //   });
  //   console.log("");
  // }

  @Action()
  run() {
    console.log(`demo command run`);
  }
}

@Command("babel")
export class Babel extends Common {
  public version = "2.1.1";
}

//
Container.run([Webpack, Babel]);
