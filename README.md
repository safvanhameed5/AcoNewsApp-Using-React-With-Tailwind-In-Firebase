## MyNewsApp-Using-React-With-Tailwind-In-Firebase

This is a React application that fetches news articles from gnews.io and displays them in a responsive layout using Tailwind CSS. Users can search for specific news, filter by category, country, and language, and navigate through paginated results. The app is deployed on Firebase Hosting.

### Features

* Fetches news articles from gnews.io API
* Search functionality for specific news
* Filters by category, country, and language
* Pagination for navigating through large result sets
* Responsive design with Tailwind CSS

### Prerequisites

* Node.js and npm installed
* A Firebase account
* An API key from gnews.io

### Installation

1. Clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Replace `{apiKey}` with your own gnews.io API key in `NewsFeed.js`.
2. Run the development server:

   ```bash
   npm start
   ```

   This will start the app at http://localhost:3000 by default.

### Deployment

1. Follow the Firebase documentation to set up Firebase Hosting for your project.
2. Build the production version of the app:

   ```bash
   npm run build
   ```

3. Deploy the built files to Firebase Hosting according to the instructions provided by Firebase.
