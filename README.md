Deploy Pancakeswap contracts to godwoken

## Prerequisites

[`Node.js` v14+](https://nodejs.org) and [`Yarn`](https://yarnpkg.com/) are required.

### Prerequisites

Install dependencies and compile contracts if not already.

```sh
yarn install
yarn compile
```

### Run

```sh
# testnet
yarn ts-node ./scripts/deploy.ts

# devnet
ENV_PATH=./.env.dev yarn ts-node ./scripts/deploy.ts
```

## Devnet Debugging

Use [godwoken-kicker](https://github.com/RetricSu/godwoken-kicker) to start a quick devnet `godwoken-polyjuice` chain.

Create such `.env.dev` file, remember to replace with your godwoken-polyjuice devnet setting.

```sh
cat > .env.dev <<EOF
DEPLOYER_PRIVATE_KEY=1473ec0e7c507de1d5c734a997848a78ee4d30846986d6b1d22002a57ece74ba
RPC_URL=http://localhost:8024
NETWORK_SUFFIX=gw-devnet

ROLLUP_TYPE_HASH=< replace with your godwoken devnet rollup type hash >
ETH_ACCOUNT_LOCK_CODE_HASH=< replace with your godwoken devnet eth-account-lock code hash >
POLYJUICE_CONTRACT_CODE_HASH= < replace with your godwoken devnet polyjuice-contract code hash >
CREATOR_ACCOUNT_ID=< replace with your godwoken devnet creator account id >

GODWOKEN_API_URL=http://localhost:6101
EOF
```
