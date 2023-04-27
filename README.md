# Mars Rovers Application

This project is a Vite.js application built with Material UI and TypeScript. It showcases the Mars Rovers photos using the NASA API. You can visit the deployed application at http://mars-rovers-josh-ai.s3-website-us-east-1.amazonaws.com/

## Features

- Browse Mars Rover photos by selecting a rover and a date
- Responsive and modern UI built with Material UI
- TypeScript for type safety and better development experience

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1 or higher)

## Installation

1. Clone the repository:

```
git clone https://github.com/jahorwitz/mars-rovers.git
```

2. Change to the project directory:

```
cd mars-rovers
```

3. Install dependencies:

With npm:

```
npm install
```

With yarn:

```
yarn
```

## Development

To start the development server:

With npm:

```
npm run dev
```

With yarn:

```
yarn dev
```

The application will be available at http://localhost:5173

## Building for Production

To build the application for production:

With npm:

```
npm run build
```

With yarn:

```
yarn build
```

The optimized production build will be generated in the `dist` folder.

## Deployment

After building the application for production, you can deploy the dist folder to your preferred hosting provider.

## Rate Limiting

Please note that there is rate limiting in place for the API, and it is very easy to trigger the rate limiting. If you encounter issues with the API, please wait a few minutes before trying again. To avoid triggering the rate limit, minimize the number of requests to the API and consider implementing caching strategies.

## License

This project is licensed under the MIT License.
