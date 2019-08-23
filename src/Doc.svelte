<script>
  import fetchDoc from './services/fetchDoc';
  import convertMarkdownToHTML from './services/convertMarkdownToHTML';

  export let id = '';

  const { title, body, labels } = fetchDoc(id);
  const bodyHTML = convertMarkdownToHTML(body);

  document.title = `ParkSB Wiki - ${title}`;
</script>

<style>
  article {
    padding: 0 0 10px 0;
    line-height: 190%;
  }
</style>

<article>
  <h1>📄 {title}</h1>
  {@html bodyHTML}
</article>
