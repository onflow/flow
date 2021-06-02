import moment from "moment";

export async function getNetworkVersion(networkName) {
  return 10;
}

export async function getNextSporkDate(networkName) {
  return moment(new Date()).format("MMM Do");
}
