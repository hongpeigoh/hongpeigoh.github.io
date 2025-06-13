# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Develop

```cmd
> npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Deploy GitHub Pages

```cmd
> npm run deploy
```

Deploy completes three parts. First, it builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

Second, it uses gh-pages to build it on the `gh-pages` branch. This is immediately deployed to your hostname.

It then hosts it locally using `serve` for final checks.
