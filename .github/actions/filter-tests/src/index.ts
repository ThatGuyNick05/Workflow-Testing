import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const token = core.getInput('github-token', { required: true });
    const octokit = github.getOctokit(token);

    const context = github.context;
    const pullRequest = context.payload.pull_request;

    if (!pullRequest) {
      core.setFailed('This action only runs on pull_request events.');
      return;
    }

    const { data: files } = await octokit.rest.pulls.listFiles({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: pullRequest.number,
    });

    const changedFiles = files.map(file => file.filename);

    const testGroups = new Set<string>();

    for (const file of changedFiles) {
      if (file.includes('math')) testGroups.add('math');
      if (file.includes('stringUtils')) testGroups.add('string');
      if (file.includes('arrayUtils')) testGroups.add('array');
    }

    const result = Array.from(testGroups);
    core.setOutput('test-groups', result.join(','));
    console.log('Test groups to run:', result);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
