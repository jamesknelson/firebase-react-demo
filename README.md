# Firebase / Create React App

This is the source from my [video introduction to adding Firebase to a Create React App project](https://www.youtube.com/watch?v=9HTJj03BoQo&t=14m30).

It's a simple Create React App project, but with a few extras:

- Firebase functions are configured, along with a development server
- Firebase hosting, along with a predeploy script that builds your app

## Firebase scripts

To start the functions dev server:

```js
firebase serve --only functions
```

To deploy your app to firebase hosting:

```js
firebase deploy --only functions
firebase deploy --only hosting
```

## Configuration

To get it working, you'll need to add a configuration file in `src/firebase.config.js`, with the following form. You can get these details from the [Firebase console](https://console.firebase.google.com) -- for details, see [the video](https://www.youtube.com/watch?v=9HTJj03BoQo&t=14m30).

```js
export default {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}
```

## Learn more

Struggle to build meaningful applications? Know the fundamentals, but not sure how to use them to build a bacon-makin' app? The check out [React & Bacon](https://frontarm.com/courses/react-and-bacon/) -- my new course that'll walk you through the process of building a real-world app built on React, Firebase and Stripe.

<br>
<br>
<br>

# And now for your regularly scheduled Create React App README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
