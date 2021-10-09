export const MAINNET = "mainnet";
export const TESTNET = "testnet";
export const CANARYNET = "canarynet";
export const HEALTHY = "HEALTHY";
export const DEGRADED = "DEGRADED";
export const UNAVAILABLE = "UNAVAILABLE";
export const UNDER_MAINTENANCE = "UNDER MAINTENANCE";
export const FORUM_ADDRESS = "https://forum.onflow.org/t/";
export const MAINNET_STATUSPAGE_ID = "fqvhhbc3hdw8";
export const TESTNET_STATUSPAGE_ID = "g9d7vtywpdfq";
export const CANARYNET_STATUSPAGE_ID = "s4z9n7p9pm3s";
export const STATUSPAGE_API_URL =
  "https://api.statuspage.io/v1/pages/ytw5bdg6zr13/components";
export const BREAKING_CHANGES_RESOURCE =
  "https://forum.onflow.org/c/announcements/breaking-changes/30.json";

export const statusPageStatuses = {
  operational: HEALTHY,
  degraded_performance: UNDER_MAINTENANCE,
  partial_outage: UNAVAILABLE,
  major_outage: UNAVAILABLE,
  under_maintenance: UNDER_MAINTENANCE
};
