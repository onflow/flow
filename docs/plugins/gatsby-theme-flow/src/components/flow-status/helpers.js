import * as fcl from "@onflow/fcl";

export const pingScript = "pub fun main(): Int { return 12 }";

export const pinger = (accessAPIURL) => {
  return async () => {
    await fcl.config().put("accessNode.api", accessAPIURL);
    return await fcl.send([fcl.script(pingScript)]).then(fcl.decode);
  };
};
