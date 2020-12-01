module.exports = {
  server: {
    command: "./node_modules/.bin/gatsby serve",
    launchTimeout: 60000, // 60 seconds
    port: 9000,
    debug: true,
  },
  launch: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};
