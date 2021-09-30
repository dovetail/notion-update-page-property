import * as core from '@actions/core';
import { Client } from '@notionhq/client';

async function run(): Promise<void> {
  const notionApiKey = getInputOrThrow('notion_api_key');
  const pageId = getInputOrThrow('page_id');
  const key = getInputOrThrow('key');
  const value = getInputOrThrow('value');

  if (notionApiKey === 'TEST') {
    core.setOutput('response', '{ "id": "123" }');
    return;
  }

  const notion = new Client({ auth: notionApiKey });

  const response = await notion.pages.update({
    page_id: pageId,
    properties: {
      [key]: JSON.parse(value),
    },
  });
  core.setOutput('response', response);
}

function getInputOrThrow(name: string): string {
  const input = core.getInput(name);

  if (input === '') {
    throw new Error(`Missing input: ${name}`);
  }

  return input;
}

(async () => {
  try {
    run();
  } catch (error) {
    core.setFailed(
      error instanceof Error || typeof error === 'string'
        ? error
        : JSON.stringify(error)
    );
  }
})();
