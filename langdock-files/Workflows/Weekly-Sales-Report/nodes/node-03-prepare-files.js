/**
 * Node 03: Prepare Files (validateCsvFiles)
 *
 * JavaScript-Code node that passes file paths to the agent.
 * The agent can read CSV files directly from these paths.
 *
 * Available variables: weeklySalesMeetingTrigger, getFileA, getFileB, getFileC
 * Error handling: Workflow stoppen
 *
 * Screenshot: ../../../docs/screenshots/new/node-03-prepare-files.png
 */

// Pass file paths to the agent
// The agent can read CSV files directly from these paths

const supportTicketsPath = getFileA.output.result.path;
const invoicesPath = getFileB.output.result.path;
const accountsPath = getFileC.output.result.path;

return {
  isValid: true,
  files: {
    supportTickets: supportTicketsPath,
    invoices: invoicesPath,
    accounts: accountsPath
  },
  message: `Files ready: ${supportTicketsPath}, ${invoicesPath}, ${accountsPath}`
};
