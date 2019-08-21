<script>
  import fetchDoc from './services/fetchDoc';
  export let id = '';
  const doc = fetchDoc(id);
</script>

<style>
  article {
    padding: 0 0 10px 0;
  }
</style>

<article>
  <h1>{doc.title}</h1>
  <p>{doc.body}</p>
</article>
