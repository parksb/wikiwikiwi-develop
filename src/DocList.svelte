<script>
  import fetchDocList from './services/fetchDocList';
  import DocListItem from './DocListItem.svelte';

  export let param = '';

  const docs = fetchDocList(param); 
</script>

<style>
  table {
    width: 100%;
    padding: 10px 0 10px 0;
  }
</style>

<table>
  <tbody>
    {#each docs as doc}
      <tr>
        <DocListItem
          id={doc.number}
          title={doc.title}
          labels={doc.labels}
          createdAt={doc.created_at}
        />
      </tr>
    {/each}
  </tbody>
</table>
