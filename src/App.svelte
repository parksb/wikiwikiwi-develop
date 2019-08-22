<script>
	import { Router, Route } from 'svelte-routing';
	import Header from './Header.svelte';
	import DocList from './DocList.svelte';
	import Doc from './Doc.svelte';
	import Footer from './Footer.svelte';
</script>

<Router>
  <Header />
	<Route path="/"><DocList /></Route>
  <Route path="doc/:id" component="{Doc}" />
  <Footer />
</Router>
