<script lang="ts">
	import { numberWrong } from '$lib/stores'
	import { onMount } from 'svelte'

	$: console.log('numberWrong from grid', $numberWrong)
	$: wrong = $numberWrong - 1

	let pieces_of_man: NodeListOf<Element>
	const setPiecesOfMan = (pieces: NodeListOf<Element>) => {
		pieces_of_man = pieces
		console.log(pieces_of_man)
	}

	onMount(async () => {
		setPiecesOfMan(document.querySelectorAll('.piece_of_man'))
	})

	$: current_piece = pieces_of_man[wrong]
	// $: if (current_piece) {
	// 	current_piece.classList.remove('white')
	// }

	$: console.log('current_piece', current_piece)
</script>

<div class="grid">
	<div class="pole">|</div>
	<div>~</div>
	<div>|</div>
	<div />

	<div class="pole">|</div>
	<div />
	<div class="piece_of_man head">O</div>
	<div />

	<div class="pole">|</div>
	<div />
	<div class="piece_of_man neck">|</div>
	<div />

	<div class="pole">|</div>
	<div class="piece_of_man left_arm">/</div>
	<div class="piece_of_man body">|</div>
	<div class="piece_of_man right_arm">\</div>

	<div class="pole">|</div>
	<div />
	<div class="piece_of_man body">|</div>
	<div />

	<div class="pole">|</div>
	<div class="piece_of_man left_leg">/</div>
	<div />
	<div class="piece_of_man right_leg">\</div>
</div>

<style>
	.grid {
		--grid-size: 400px;
		display: grid;
		width: var(--grid-size);
		height: var(--grid-size);
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
	}

	.grid > div {
		display: grid;
		align-items: center;
		text-align: center;
		font-size: 3rem;
		background: var(--background);
	}

	.piece_of_man {
		color: var(--background);
	}

	.left_arm,
	.left_leg {
		text-align: right !important;
	}

	.right_arm,
	.right_leg {
		text-align: left !important;
	}
</style>
