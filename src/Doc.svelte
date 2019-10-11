<script>
  import fetchDoc from './services/fetchDoc';
  import convertMarkdownToHTML from './services/convertMarkdownToHTML';

  export let id = '';

  const { title, body, labels, created_at, updated_at } = fetchDoc(id);
  const bodyHTML = convertMarkdownToHTML(body);
</script>

<style>
  article {
    padding: 0 0 10px 0;
    line-height: 190%;
  }

  h1 {
    margin-bottom: 0;
  }

  date {
    font-size: 14px;
    font-style: italic;
    color: #9f9f9f;
  }
</style>

<article>
  <h1>📄 {title}</h1>
  <date>Created: <time datetime="{created_at}">{created_at}</time>, Updated: <time datetime="{updated_at}">{updated_at}</time></date>
  {@html bodyHTML}
</article>
