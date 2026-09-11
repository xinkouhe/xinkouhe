import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split('/') : [];
const isProjectPage = Boolean(owner && repo && repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'https://xinkouhe.github.io',
  base: isProjectPage ? `/${repo}` : '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
