<script>
	import DocList from './DocList.svelte';
	import Doc from './Doc.svelte';
  import { Router, Link, Route } from 'svelte-routing';
</script>

<Router>
	<Route path='/'><DocList /></Route>
  <Route path='doc/:id' component='{Doc}' />
</Router>