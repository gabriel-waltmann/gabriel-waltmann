import { defineConfig } from 'cypress'
 
import dotenv from "dotenv";

dotenv.config();

const CYPRESS_BASE_URL = process.env.CYPRESS_BASE_URL ?? "http://localhost:3000";

export default defineConfig({
  projectId: 'oynpv9',
  e2e: {
    baseUrl: CYPRESS_BASE_URL,
    specPattern: 'cypress/e2e/**/**.cy.ts',
    supportFile: false,
    watchForFileChanges: false,
  },

  env: {
    CYPRESS_BASE_URL,
  }
})