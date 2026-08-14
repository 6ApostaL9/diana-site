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

## Normal workflow

For each normal website change:

1. Check that the repository has no unrelated local changes.
2. Switch to main.
3. Update main from origin using fast-forward only.
4. Create a separate branch named agent/<short-task-name>.
5. Make only changes related to the user's request.
6. Inspect the full git diff before committing.
7. Check that no unrelated files were modified.
8. Commit with a concise descriptive commit message.
9. Push the branch to origin.
10. Create a Pull Request into main.
11. Review the Pull Request diff.
12. If the requested change is correct and there are no unrelated modifications, merge the Pull Request into main.
13. Never force-push main and never rewrite main history.
14. After merge, monitor the GitHub Actions workflow "Deploy website to Beget".
15. Do not consider publication complete until the deployment workflow finishes successfully.
16. If deployment fails, inspect the actual failed job, step and logs before proposing or making a fix.

## Publishing

A normal user request to change the website means the change should be implemented and published through:

branch → commit → push → Pull Request → merge main → GitHub Actions → Beget

Do not require a separate "публикуй" confirmation unless the user explicitly says that the change is only a draft, preview, experiment, or must not be published yet.

## Safety

Never:
- force-push main;
- rewrite main history;
- delete main;
- delete the repository;
- expose credentials or SSH private keys;
- edit Beget production files directly;
- modify unrelated project files;
- ignore or bypass a failed deployment.
