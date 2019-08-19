<script>
  import DocListItem from './DocListItem.svelte';

  const docs = [
    {
      id: 0,
      title: 'Doc 1',
    }, {
      id: 1,
      title: 'Doc 2',
    }
  ]
</script>

{#each docs as doc}
  <DocListItem id={doc.id} title={doc.title} />
{/each}
