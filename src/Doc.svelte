<script>
  import fetchDoc from './services/fetchDoc';
  import convertMarkdownToHTML from './services/convertMarkdownToHTML';
  export let id = '';
  const { title } = fetchDoc(id);
  const body = convertMarkdownToHTML(doc.body);
</script>

<style>
  article {
    padding: 0 0 10px 0;
    line-height: 190%;
  }
</style>

<article>
  <h1>{title}</h1>
  {@html body}
</article>
