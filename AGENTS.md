# Diana Portfolio Website

## Project architecture

This is a static website hosted on Beget.

Do not introduce Vite, React, npm, WordPress, Tilda, build steps, dist directories or another framework unless the user explicitly requests an architectural migration.

Main production files include:
- index.html
- styles.css
- script.js
- .htaccess
- 404.html
- robots.txt
- sitemap.xml
- site.webmanifest
- favicon.svg
- assets/

Production domain:
https://diana-designer.ru/

GitHub repository:
6ApostaL9/diana-site

Production branch:
main

GitHub main is the source of truth.

Do not edit production files on Beget directly.

## Deployment

Every push or merge to main automatically starts the existing GitHub Actions workflow:
.github/workflows/deploy.yml

The workflow deploys the repository to Beget using SSH and rsync.

Production directory:
 /home/d/dianab60/diana-designer.ru/public_html

Codex must not access Beget directly for normal website changes.

Codex must never request, read, expose or modify the private Beget deployment SSH key.

## Mandatory local preview and approval

EVERY project change, without exception, must be shown to the user in a local preview and explicitly approved by the user before any commit, push, Pull Request, merge or production deployment.

This rule also applies to technical changes that are not expected to alter the site's appearance. The local preview is still mandatory so the user can verify that the site continues to open and work correctly.

Approval applies only to the exact iteration that was previewed. A previous approval never authorizes publication of later changes.

## Required workflow

For every project change:

1. Check the working tree before starting.
2. Switch to `main` and synchronize it with `origin/main` using fast-forward only.
3. Create a separate working branch named `agent/<short-task-name>`.
4. Make only changes related to the user's request.
5. Inspect the full Git diff.
6. If any unrelated changes are present, stop.
7. Before commit or push, start a local copy of the site from the current working branch.
8. For this static website, use a local HTTP server without npm, Vite or a build process. Prefer:

   `python3 -m http.server 8000 --bind 127.0.0.1`

   If port 8000 is occupied, automatically select another available localhost port.
9. Open the local site in the Codex in-app browser.
10. Tell the user the exact localhost URL.
11. Stop and wait for the user's explicit decision.

Before explicit user approval, never:
- commit;
- push;
- create a Pull Request;
- merge;
- modify `main`;
- start a production deployment.

If the user requests additional changes:

1. Continue in the same working branch.
2. Make the requested changes.
3. Inspect the full diff again.
4. Update or restart the local preview when necessary.
5. Open the current preview in the Codex in-app browser again.
6. Stop and wait for a new explicit approval.

Repeat this preview-and-approval cycle after every iteration. Never treat an earlier approval as permission to publish subsequent edits.

## Publishing after approval

Publication is allowed only after an explicit user command such as:
- "публикуй";
- "выкатывай";
- "всё хорошо, публикуй";
- "можно в main";
- another unambiguous command with the same meaning.

After explicit approval:

1. Inspect the final Git diff.
2. Confirm that no unrelated changes are present.
3. Commit with a concise descriptive commit message.
4. Push the working branch to origin.
5. Create a Pull Request into `main`.
6. Review the final Pull Request diff.
7. Merge the Pull Request into `main`.
8. Wait for the GitHub Actions workflow "Deploy website to Beget" to finish.
9. Check every deployment job and step.
10. Consider the task complete only after the deployment succeeds.

If deployment fails:

1. Do not consider the task complete.
2. Identify the specific failed job and step.
3. Inspect the actual logs and determine the concrete technical cause.
4. Make fixes in a separate working branch.
5. Show every fix in a local preview and obtain explicit user approval again before publishing it.

## Safety

Never:
- force-push main;
- rewrite main history;
- delete main;
- delete the repository;
- expose credentials or SSH private keys;
- edit Beget production files directly;
- modify unrelated project files;
- publish any change without the mandatory local preview and explicit user approval;
- ignore or bypass a failed deployment.
