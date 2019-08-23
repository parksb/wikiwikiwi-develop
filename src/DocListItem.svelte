<script>
  import { Router, Link } from 'svelte-routing';
  import Doc from './Doc.svelte';

  export let id = '';
  export let title = '';
  export let labels = [];
</script>

<style>
  td {
    text-decoration: inherit;
  }

  .label-column {
    float: right;
  }
</style>

<Router>
  <Link to="/doc/{id}">
    <td>📄</td>
    <td>#{id}</td>
    <td>{title}</td>
  </Link>
  <td class="label-column">
    {#each labels as label}
      <Link to="/label/{label.name}">
        <span style="background-color: #{label.color};">{label.name}</span>
      </Link>
    {/each}
  </td>
</Router>
