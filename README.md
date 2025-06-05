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
- [Known Bugs](#known-bugs)
- [Wishlist](#wishlist)
- [Thoughts] (#thoughts)

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

## Known Bugs

- Routing is not set up 
- Testing is not complete, issues using Jest to test Vite related code (specificially the env variables)
- Cannot Navigate from a favourited animal to its details page
- Getting and displaying animal characteristics not complete and not linked to animal card, hardcoded atm. 
- Mobile responsiveness not done or tested.
- API with data caching not done. 

## Wishlist

- List of existing animals that the user can choose from instead of having to type their own
- The above also allows the user to discover new animals (maybe on an explore page)
- Grouping and sorting based on certain characteristics so that the user can rank the animals based on those characteristics
- Allow user removal of favourited animal
- Navigation of some sorts to navigate back to the landing page after having visited the details page. Maybe a "back" button or breadcrumbs.
- Some sort of validation to ensure that the user is entering an animal and not random things
- If the user is adding random things, the API returns an empty array as it can't match anything so it would be helpful to provide the user with feedback that their animal does not exist or can't be found.
- User friendly error handling 
- Pictures and gallery/slider for Animal Detail Page
- Proper unit tests 
- Automated UI tests with Cypress to test expected user behaviours
- Future: Store the info in a DB like MongoDB, host on AWS S3
- Optimisation in terms of code splitting, tree shaking and image optimization (Major issue on for Page Speed Insights)

## Thoughts

Initially when I started, I misread what the Ninja API endpoint does, my aim was to get a list of animals that the user can look through and pick the ones that are their favourite. After spending some time on that and getting no results, I went back to read the API docs and I realised my mistake. The endpoint requires a parameter that specifies which animal you want detailed information from. I then had to quickly adapt my architecture and flow to prevent too much time spent/wasted (which isn't the point of the project), that resulted in mostly pseudo code, and code that was not thoroughly tested. 

It makes me uncomfortable that I was not able to properly implement everything before handing it in, but the project notes said no more than 3 hrs so I had to plan my time adequately. 

I went with React 18.2.0 because despited being the latest, 19 was only recently released and it has not yet been properly community tested. I know that many projects using 18.2.0 has gone to production so that is the safest. 

I chose Tailwind 4 because it is supposedly faster (with new rust engine) with smaller bundle sizes.

For the data caching, I would have probably have gone with Tanstack Query (formerly React Query). Truthfully, I have not used this for a while, but from a quick Google search and its docs, it seems most sensible for this use case, mostly because of "Server state: Is persisted remotely in a location you may not control or own", I do not own or manage API ninja's animal enpoint.

If I had more time, I would have probaly wrestled with the issue of VITE env variables causing jest mock issues. 
I went with Vite because it was simpler to set up and Webpack is seemingly on its way out. Although my experience with Vite + Jest is limited, hence the issues with mocking. 

For future implementations and considerations, I would have liked to implement an "intelligent" explore algorithm that suggest to the user "new" animals to their favourites collection, based on which characteristics they like or dislike. 

Total time taken for project: 3hrs 1min 59 seconds including write up.