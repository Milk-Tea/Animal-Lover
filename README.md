# Animal Lover

> A platform for animal lovers to document their favourite animals, rank them and understand them better!

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [API](#api)
- [Development](#development)
- [License](#license)
- [Wishlist](#wishlist)

## Overview

This project aims to provide users with more in depth understanding of the animals that they love, and document what they love about them!

## Tech Stack

- **Frontend Framework**: React 18.2.0 (Most stable, trialed and tested version)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Yarn

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone
   cd animal-lover
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

### Environment Setup

1. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** and add your API keys and configuration:

   ```env
   # Add your environment variables here
   VITE_API_BASE_URL=your_api_url
   VITE_API_TOKEN=your_api_key
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

The application will be available at `http://localhost:5173`.

## API

- **GET** `/animals?name=`
  - Retrieves the details of an animal based on the user input.

More API endpoints and documentation to follow as this evolves.

## Development

### Available Scripts

- `yarn run dev` - Start development server
- `yarn run build` - Build for production
- `yarn run lint` - Run ESLint
- `yarn format` - Run Prettier

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Wishlist

- Grouping and sorting based on certain characteristics so that the user can rank the animals based on those characteristics
-

1hr25mins51s 04/06
