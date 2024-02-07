# Mini Proj ABI UI

This project is a simple user interface for interacting with Ethereum smart contracts. It allows you to input a contract address and ABI, then interact with the contract's functions directly from the UI.

## Installation

To install the dependencies:
```bash
$ yarn install
```

## Running the App

To start the development server:
```bash
$ yarn dev
```

To build the app for production:
```bash
$ yarn build
```

## Features

- Connect to Ethereum wallets using MetaMask.
- Input a contract address and ABI, then interact with the contract's functions.
- Supports both read and write functions.
- Displays a list of previously used contracts for easy access.

## Components

The main components of this project are:

- `App.tsx`: The main component that sets up the router and layout.
- `Navbar.tsx`: The navigation bar component.
- `Layout.tsx`: The layout component that wraps around the main content.
- `Home.tsx`: The home page component.
- `Contract.tsx`: The contract page component.
- `HomeForm.tsx`: The form on the home page for inputting a contract address and ABI.
- `HomeContracts.tsx`: The component that displays a list of previously used contracts.
- `ContractABIHandler.tsx`: The component that handles interaction with a contract's functions.
- `ContractReader.tsx`: The component that handles reading data from a contract.
- `ContractWrite.tsx`: The component that handles writing data to a contract.

## Dependencies

This project uses several key dependencies:

- `react` and `react-dom` for building the UI.
- `react-router-dom` for routing.
- `react-hook-form` for form handling.
- `ethers` for interacting with Ethereum.
- `wagmi` for wallet connection and contract interaction.
- `zod` for form validation.
- `tailwindcss`, `@tailwindcss/typography`, `daisyui`, and `autoprefixer` for styling.
- `vite` for building and serving the app.
- `typescript` for static types.
- `eslint` for linting.

## Dev Dependencies

- `@types/react` and `@types/react-dom` for React type definitions.
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` for TypeScript linting with ESLint.
- `@vitejs/plugin-react` for using Vite with React.
- `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` for linting and hot reloading React components.

## License 📜

`abi-ui` is available under the MIT license. See the LICENSE file for more info.

## Forking this repo 🚨

Many people have contacted us asking if they can use this code for their own websites. The answer to that question is usually **yes**, but with credits and approval. There are some cases, such as using this code for a business or something that is greater than a personal project, that we may be less comfortable saying yes to. If in doubt, please don't hesitate to ask us.

We value keeping this site open source, but as you all know, _**plagiarism is bad**_. We spent a non-negligible amount of effort developing, designing, and trying to perfect this iteration of our website, and we are proud of it! All we ask is to not claim this effort as your own.