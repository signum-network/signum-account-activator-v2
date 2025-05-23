# Signum Account Activator (Version 2)

![image](https://github.com/signum-network/signum-account-activator-v2/assets/3920663/e18dc11a-e73f-41eb-9373-40af3f063646)

This is a web application (and service) to activate new [Signum](https://signum.network/) accounts.

A Signum account is considered active only, if it owns a public key. Usually, the public key is only available once the
account has executed at least one transaction on the blockchain. To execute a transaction one needs  
a sufficient balance to pay the transaction fee. To do this, an user who just created an account must ask someone to
transfer some Signum to that account (or using a faucet). In that first step, the account will be registered in the blockchain (as receiver) and
though exists publicly. To turn from an _passive_ into an _active_ account the user has to create any kind of transaction.

This service sends the user a welcome message and by passing the user accounts public key the account gets activated.
Doing so, the user does not need to create a transaction and the sending step can be omitted.

---

⚠️ NEVER HODL FUNDS IN NON-ACTIVATED ACCOUNTS! ⚠️

---

## Anatomy of passphrases

> Read also in the [official docs](https://docs.signum.network/signum/accounts)

Before you obtain an account in Signum you have to generate a so-called _passphrase_. This passphrase is used to _derive_ a set of one public and two **private** keys (sign and agreement).
The public key - technically the cryptographically hashed passphrase, is being decoded in an _almost_ unique number, which is used as _account id_.
For better readability the account id is also encoded to a _Reed-Solomon-Address_ - that identifier starting with `S-`. Both are interchangeable, but do not reveal the original passphrase.  
Although, it's possible to use any kind of string as passphrase, it's highly recommended to use a "random generator" (like in the Phoenix Wallet), because once created a passphrase it cannot be changed anymore.  
Ideally, it's best to have a _truly_ randomized passphrase, but this [true randomness](https://www.random.org/randomness) is hard to achieve. Passphrases in crypto coin world are **permanent** and **immutable**;
that is, they determine the accounts identifier/address. In other words: **The passphrase is the account** - An individual that knows the passphrase (or it's derived private keys) owns the account.

> It's the owners responsibility to secure the passphrase as much as possible

## Getting your accounts public key

As describe earlier, an account only exists in the Signum blockchain once the owner has realized his/her first transaction. But it's also possible to announce the public key of the receiving account in a transaction.
That way an account becomes activated without having executed any transaction yet.
This application/service does exactly this. One of the most frequently asked questions is: How do I get my public key?
We pointed out that a public key is part of a set of keys derived from the passphrase. So, the public key is available once the passphrase generated.  
For security reasons, the activation service does not ask for the passphrase, because of the risk of a man-in-the-middle attack.

> The Phoenix wallet activates your account automatically on creation, but also offers the option to activate imported accounts

If you have any question, don't hesitate to contact us on [discord](https://discord.gg/KWVbWJv), or open an [issue](https://github.com/signum-network/signum-account-activator-v2/issues/new)

# Developer Section

## Developing

### Prerequisites

This service is built with Sveltekit. A quick and easy way for deployment is [Vercel](https://vercel.com).
Additionally, there's a dependency with [Upstash](https://upstash.com) for rate limiting, and an optional dependency
with [Axiom](https://axiom.co) for logging.

### Installation

Install dependencies with `npm install` (or `pnpm install` or `yarn`),
start a development server, copy the `.env.example` file to `.env` and set the env vars:

```bash
cp .env.example .env
```

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
