exports.config = {
  output:   './output',
  helpers: {
    WebDriver: {
      url: "https://www.distrowatch.com/",
      browser: "chrome",
      desiredCapabilities: {},
      windowSize: "maximize",
      waitForTimeout: 20000,
      smartWait: 5000,
      restart: true,
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  gherkin:   {
    features: './features/*.feature',
    steps:    './steps/*.steps.js',
  },
  include : {
    pageHitRankingPage: "./pages/pageHitRanking.page.js"
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    wdio: { enabled: true, services: ["selenium-standalone"] }
  },
  name:  'iKhokha Codeceptjs Automated Tests',
};
