# Acme Bank Inc Online Banking Portal

A fictional customer facing online banking portal for Acme Bank Inc. This application is a test org artifact used for ETM ASMP testing. It is intentionally minimal and contains no real banking logic or data.

## Pages

- **Login**: A simple login form (accepts any credentials)
- **Dashboard**: Shows fake account balances for checking and savings
- **Transfers**: A mock transfer form between accounts

## Prerequisites

- Node.js 18 or later
- npm

## Getting Started

```
make install
make dev
```

The app will start on http://localhost:5173 by default.

## Makefile Targets

| Target | Description |
|--------|-------------|
| `make install` | Install dependencies |
| `make dev` | Start the development server |
| `make build` | Create a production build |
| `make clean` | Remove node_modules and dist |
