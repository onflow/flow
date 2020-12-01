module.exports = {
  server: {
    command: "./node_modules/.bin/gatsby serve",
    launchTimeout: 60000, // set to 30s
    port: 9000,
    debug: true,
  },
  launch: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};
