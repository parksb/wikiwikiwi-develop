import md from 'markdown-it';
import hljs from 'highlight.js';
import mdFootnote from 'markdown-it-footnote';
import katex from 'katex';
import mdTex from 'markdown-it-texmath';
import mdCheckbox from 'markdown-it-checkbox';
import mdAnchor from 'markdown-it-anchor';
import mdTableOfContents from 'markdown-it-table-of-contents';

function convertMarkdownToHTML(markdown) {
  var markdownit = new md({
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    langPrefix: 'language-',
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      }
      return `<pre class="hljs"><code>${markdownit.utils.escapeHtml(str)}</code></pre>`;
    },
  }).use(mdFootnote)
    .use(mdTex.use(katex), {
      delimiters: 'gitlab',
      macros: { '\\RR': '\\mathbb{R}' },
    })
    .use(mdCheckbox)
    .use(mdAnchor)
    .use(mdTableOfContents, {
      includeLevel: [1, 2, 3],
    });

  markdownit.renderer.rules.footnote_block_open = () => (
    '<h2>Footnotes</h2>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n'
  );

  return markdownit.render(markdown);
}

export default convertMarkdownToHTML;
