<svelte:head>
	<title>Why Activation</title>
</svelte:head>

<section class="hero">
	<div class="hero-body">
		<div class="container center-text">
			<h2
				class="subtitle is-uppercase is-size-2-tablet is-size-4-mobile center-text has-text-white"
			>
				Why Account Activation?
			</h2>
		</div>
	</div>
</section>

<figure class="center-text">
	<img src="./accounts.png" alt="Account Representations in Signum" />
</figure>

<section class="content">
	<h3 class="has-text-warning has-text-centered">
		Never hodl funds in an account without an assigned public key!
	</h3>
</section>

<section id="text" class="content has-text-justified has-text-white">
	<h2 class="has-text-white">Anatomy of Signum Accounts</h2>
	<p>
		Signum is an <b>account-oriented blockchain</b>, in contrast to <b>UTXO-based models</b> like
		Bitcoin. This approach is often considered more intuitive, resembling traditional bank accounts.
		Unlike Ethereum, Signum accounts can be identified in three different ways:
		<b>Public Key, Numeric ID, and Reed-Solomon Address.</b>
	</p>
	<p>
		The <b>Public Key</b> serves as the origin of the account and is generated through a specific key
		generation algorithm.
	</p>
	<p>
		The <b>Numeric ID and Reed-Solomon Address</b>, both derived from the public key, are more
		commonly used for everyday account identification thanks to their enhanced readability.
	</p>
	<h2 class="has-text-white">Protect your account</h2>
	<p>
		To transfer funds between accounts, the <b>Numeric ID</b> or the <b>Reed-Solomon Address</b> is
		typically used. These forms offer a more compact "cryptographic namespace" than the full public
		key. However, to fully secure a Signum account, it is
		<b>essential to register the public key on the blockchain</b>. Without this, the account is
		vulnerable to certain types of attacks.
	</p>
	<p>
		Usually, the public key becomes visible once the account owner has performed at least one <b
			>outgoing transaction</b
		>. However, sending a transaction requires the account to have a <b>minimum balance</b>. This is
		where the <b>Activation Service</b> comes into play: by using the recipient's public key, it allows
		for the public key to be registered on the blockchain, ensuring the account is fully protected.
	</p>
</section>

<style>
	p {
		padding: 0.5rem;
	}
	.center-text {
		text-align: center !important;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		max-height: 180px;
	}

	#text {
		max-height: 45vh;
		overflow-y: scroll;
	}
</style>
