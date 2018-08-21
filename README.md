Redux Twitter-like app
========

## Overview
A simple Twitter-like app Using the curriculum from TylerMcGinnis' [Redux course](https://tylermcginnis.com/courses/redux/) as a baseline.

Built with React/Redux, it can showcase some of the strengths of an interconnected App that uses Redux to manage/share its state.

## Viewing the final Product
The end result can be seen at: [Not Quite Twitter](https://not-quite-twitter.herokuapp.com/)

  **For Bonus Points**
Install the Redux DevTools Extension
>[Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

>[Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

Then open up the **DevTools** and navigate to the **Redux** tab to view all of the Redux state changes based on your actions.

## or to run the app locally
0. Clone/DL the repository

*From the root directory*
1. Install the dependencies
`npm install`


**(Dev ENV)**
2. Boot up the webpack-dev-server
`npm start`


**(Production)**
2. Bundle the project into a build folder:
`npm run build`
3. Start the server:
`node server.js`
4. View the site at the [localhost](localhost:3000)
