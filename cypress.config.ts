import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );
  return config;
}

export default defineConfig({
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 12000,
  viewportWidth: 1360,
  viewportHeight: 790,
  e2e: {
    baseUrl: "https://www.asos.com/",
    specPattern: "cypress/e2e/*/*.{feature,features}",
    supportFile: "cypress/support/commands.js",
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 10000,
    chromeWebSecurity: true,
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,
    watchForFileChanges: true,
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
    projectId: "szcww9",
    setupNodeEvents,
  },
});
