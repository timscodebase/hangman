<script>
	import '../styles/global.css'
</script>

<div class="container">
	<h1>Hangman</h1>
	<h2>Guess the word</h2>
	<p>Spell the word before you hang!</p>

	<slot />
</div>

<style>
	.container {
		max-width: var(--page-width);
		margin: 0 auto;
	}
</style>
