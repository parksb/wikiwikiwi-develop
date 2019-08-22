<script>
  import { Router, Link } from 'svelte-routing';
  import Doc from './Doc.svelte';
  export let id = '';
  export let title = '';
</script>

<style>
  td {
    text-decoration: inherit;
  }
</style>

<Router>
  <Link to="doc/{id}">
    <td>📄</td>
    <td>#{id}</td>
    <td>{title}</td>
  </Link>
</Router>
