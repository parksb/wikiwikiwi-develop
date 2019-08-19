<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Doc from './Doc.svelte';

  export let id = '';
  export let title = '';
</script>

<Router>
  <Link to='doc/{id}'>
    <h1>{title}</h1>
  </Link>
</Router>
