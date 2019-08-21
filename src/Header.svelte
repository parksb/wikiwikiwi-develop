<script>
  import { Link } from 'svelte-routing';
	const emojis = ['👨‍💻', '🐱', '🦊', '📚', '📖', '📑', '🔭'];
	const emoji = emojis[Math.floor(Math.random() * emojis.length)];
</script>

<style>
  header {
    border-bottom: 1px #333 solid;
  }
</style>

<header>
	<h1>
    <Link to='/'>{emoji} ParkSB Wiki</Link>
	</h1>
</header>
