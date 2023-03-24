<script lang="ts">
	export let letter: string
	export let handelCorrect: () => void
	export let handleWrong: () => void

	const handleCheck = (e: Event) => {
		if (!e.target) return
		if (e.target?.value === letter) {
			handelCorrect()
		} else {
			handleWrong()
			e.target.value = ''
		}
	}
</script>

<form action="">
	<input type="text" maxlength="1" on:input={handleCheck} />
</form>

<style>
	input {
		width: 3rem;
		height: 3rem;
		margin: 0.5rem;
		padding: 0.5rem;
		font-size: 2rem;
		text-align: center;
	}
</style>
