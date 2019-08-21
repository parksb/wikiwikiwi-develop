<script>
  import fetchDocList from './services/fetchDocList';
  import DocListItem from './DocListItem.svelte';
  const docs = fetchDocList(); 
</script>

<style>
  table {
    padding: 10px 0 10px 0;
  }
</style>

<table>
  <tbody>
    {#each docs as doc}
      <tr>
        <DocListItem id={doc.number} title={doc.title} />
      </tr>
    {/each}
  </tbody>
</table>
