<script>
  import { Router, Link } from 'svelte-routing';
  import Doc from './Doc.svelte';

  export let id = '';
  export let title = '';
  export let labels = [];
  export let createdAt = '';

  createdAt = createdAt.replace(/T\d{2}:\d{2}:\d{2}Z/g, '');
</script>

<style>
  td {
    text-decoration: inherit;
  }

  time {
    font-size: 12px;
    font-style: italic;
    color: #afafaf;
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
    <td><time datetime="{createdAt}">{createdAt}</time></td>
  </Link>
  <td class="label-column">
    {#each labels as label}
      <Link to="/label/{label.name}">
        <span style="background-color: #{label.color};">{label.name}</span>
      </Link>
    {/each}
  </td>
</Router>
