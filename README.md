# Portfolio for Erik Irgens

Hugo generated static site for Erik Irgens' portfolio.

## Updating pages

Updating the associated Github Pages deployment is a multi-step process:

1. Make changes to content in src
2. Add to grunt build process to move other content to Public directory on build
3. run `grunt` task to generate site
4. Add content and push to master branch through normal git add/commit/push process.
5. Run `grunt shell:githubpages` to push new public directory to github pages site.
