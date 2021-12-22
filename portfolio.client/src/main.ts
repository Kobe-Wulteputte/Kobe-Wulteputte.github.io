import { Aurelia } from "aurelia-framework";
import environment from "./environment";
import { PLATFORM } from "aurelia-framework";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature("resources")
    .plugin(PLATFORM.moduleName("aurelia-fontawesome"), {
      icons: [fab, fas],
    });

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.start().then(() => aurelia.setRoot());
}
