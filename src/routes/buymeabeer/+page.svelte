<script>
	import ohagerAvatar from '$lib/assets/ohager_bat.png';

	let donationAccount = 'S-9K9L-4CB5-88Y5-F5G4Z';
	let hasCopied = false;
	const copyAddress = () => {
		navigator.clipboard.writeText(donationAccount);
		hasCopied = true;
	};
</script>

<svelte:head>
	<title>Help ohager</title>
</svelte:head>

<section class="hero">
	<div class="hero-body">
		<div class="container center-text">
			<h2
				class="subtitle is-uppercase is-size-2-tablet is-size-4-mobile center-text has-text-white"
			>
				Buy me a beer 🍻
			</h2>
		</div>
	</div>
</section>

<section class="content center-text">
	<figure>
		<img src={ohagerAvatar} alt="Signum Network Member ohager" />
	</figure>
	<h3 class="has-text-white is-clickable">
		{donationAccount}
		<span
			tabindex="0"
			role="button"
			on:keydown={copyAddress}
			on:click={copyAddress}
			title="Copy Address">{hasCopied ? '✅' : '📋'}</span
		>
	</h3>
	<small class="has-text-white is-clickable">
		Did you know? When XT Wallet is installed, you can select any Account Address on a web page,
		right-click, and use the Signum menu to open the explorer or send funds to the selected account.
	</small>
</section>

<style>
	.center-text {
		text-align: center !important;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		max-height: 180px;
	}

	@media (max-width: 400px) {
		.content img {
			width: 112px;
		}
	}
</style>
