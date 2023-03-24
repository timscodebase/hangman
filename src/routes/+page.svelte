<script lang="ts">
	import LetterInput from '$lib/LetterInput.svelte'
	import HangGrid from '$lib/HangGrid.svelte'
	import { numberWrong } from '$lib/stores'
	export let data

	type Words = {
		allWords: string[]
		adjectives: string[]
		nouns: string[]
		verbs: string[]
	}

	const { allWords, adjectives, nouns, verbs } = data.words as Words
	const wordlists = [allWords, adjectives, nouns, verbs]

	let selectedWordset = 0
	let word: string
	$: list = wordlists[selectedWordset]
	$: listName = ['All Words', 'Adjectives', 'Nouns', 'Verbs'][selectedWordset]

	let isGameStarted = false
	let numberCorrect = 0
	let gameLost = false
	let gameWon = false

	const getNewWord = () => {
		word = list[Math.floor(Math.random() * list.length)]
	}

	const handelCorrect = () => {
		numberCorrect++
		if (numberCorrect === word?.length) {
			numberCorrect = 0
			gameWon = true
			getNewWord()
		}
	}

	const handleSubmit = () => {
		isGameStarted = true
		getNewWord()
	}

	const handleWrong = () => {
		numberWrong.update((n: number) => n + 1)
		if ($numberWrong === 8) {
			numberWrong.set(0)
			gameLost = true
			getNewWord()
		}
	}
</script>

{#if isGameStarted}
	{#if !gameLost}
		{#if !gameWon}
			<p>You are playing {listName}</p>
			<p>The word is: {word}</p>
			<div class="blanks">
				{#each word as letter}
					<LetterInput {letter} {handelCorrect} {handleWrong} />
				{/each}
			</div>
			<HangGrid />
		{:else}
			<h1>You won!</h1>
			<button on:click={() => (gameWon = false)}>Play again</button>
		{/if}
	{:else}
		<h1>You lost!</h1>
		<button on:click={() => (gameLost = false)}>Play again</button>
	{/if}
{:else}
	<form on:submit|preventDefault={handleSubmit}>
		<h3>Game setup</h3>
		<p>What type of words would you like to play from?</p>
		<select bind:value={selectedWordset}>
			<option value="0">All Words (Adjectives, nouns, and verbs)</option>
			<option value="1">Adjectives</option>
			<option value="2">Nouns</option>
			<option value="3">Verbs</option>
		</select>
		<button type="submit">Start game</button>
	</form>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	form * {
		width: 100%;
	}

	select {
		margin-bottom: 1rem;
	}

	.blanks {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	select {
		height: 3rem;
		margin: 0.5rem;
		padding: 0.5rem;
		font-size: 1.5rem;
		text-align: center;
	}
</style>
