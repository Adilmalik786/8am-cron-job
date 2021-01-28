const cron = require("node-cron");

// TODO: Use Logger instead of console

module.exports = {
  async run() {
    try {
      // call API here
    } catch (error) {
      console.log("[cron.js]:", error);
    }
  },

  async start() {
    //  cron job runs every day at 8:00 AM
    return cron.schedule(`0 8 * * *`, this.run.bind(this));
  },
};
