import { defineConfig } from 'astro/config';
import remarkPrism from 'remark-prism';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [[remarkPrism, { plugins: ['line-numbers'] }]],
  },
});
