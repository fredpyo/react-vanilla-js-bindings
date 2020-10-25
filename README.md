This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Make React Components Available to the Outside World

This is an example project that exposes React components for use with [Vanilla JavaScript](https://stackoverflow.com/questions/20435653/what-is-vanillajs) and thus any other librar you want to dream of.

The key thing here is that React is just JavaScript, but since it's heavily compiled thanks to Webpack and Babel (to keep all that JSX goodness) it might nto seem straightforward how to make components available for use outside of the code compiled in the project.

This project is an example on how to make the [Intro to React](https://reactjs.org/tutorial/tutorial.html) tutorial components accessible from outside the compiled JS code (btw if you haven't tried the tutorial yet, you should). 

## Getting started

1. Clone the repo
2. `$ npm install` to install all packaged
3. `$ npm start` to start your web server. You shold now see the Tic Tac Toe app running.
4. Modify `index.js`, comment lines 6-9, save and rerun the app (if you left `npm start` running, the app should hot-reload).
5. You'll see an empty screen, open a console and type `SUPER.render(SUPER.components.game, document.getElementById('root'))`
6. The same app will now be fully functional!

Now that you saw it in action, look into `index.js` to see how things are tied together.

Inspiration (as in all of the code that does the work) came from this post:
https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_use_react_components_with_vanilla_js.html

## What is the `SUPER` object?

It's a wrapper that gives access to select React components plus a plethora of functions to render (and unrender) react components.

### `components`

#### `square`

The smallest component, responsible of rendering a square in the Tic Tac Toe game.

**Properties:**
- value: a string with the value to be rendered in this squire
- onClick: callback when this cell is clicked

#### `game`

The entire game component that manages state and renders all other components below it.

### `render()`
`SUPER.render(element, properties, targetNode[, callback]`

Main function responsible of rendering React components.

**Arguments:**
- `component`: one of the components exposed in `SUPER.components`
- `props`: properties for the component (see official docs on [React.createElement()](https://reactjs.org/docs/react-api.html#createelement))
- `targetNode`: HTML node (usually obtained by `document.getElementBy...()`) where the component will be rendered
- `callback`: callback that will be executed after the component is rendered or updated.

For more information, look at the docs for [React.createElement()](https://reactjs.org/docs/react-api.html#createelement) and [ReactDOM.render()](https://reactjs.org/docs/react-dom.html#render)

### `renderNode()`
`SUPER.renderNode(targetNode)`

Render react components directly from existing HTML. Node name will be matched against the components registered in `SUPER.components`, any attributes of the HTML element will be sent over to the `SUPER.render()` as `props`.

**Arguments:**
- `targetNode`: a HTML node (usually obtained by `document.getElementBy...()`)

### `renderAllNodes()`
`SUPER.renderNode(targetNodes)`

Render react components directly from existing HTML. Node names will be matched against the components registered in `SUPER.components`, any attributes of the HTML element will be sent over to the `SUPER.render()` as `props`.

**Arguments:**
- `targetNodes`: list of HTML nodes (usually obtained by `document.getElementsBy...()`)

### `unmountAll()`
`SUPER.renderNode()`

Unmount (remove any HTML and event handlers) all React components rendered with any of the methods above. This will reset the page to the original HTML content.

### `unmount()`
`SUPER.unmount(node)`

Unmount (remove any HTML and event handlers) a specific React component rendered with any of the methods above. This will reset the node to the original HTML.

**Arguments:**
- `node`: Node (usually obtained by `document.getElementBy...()`) to reset

---

## Are there other ways of doing this?

There sure are, this is just one of many ways of doing this. Here's another example:

https://muktak.com/render-react-components-using-vanilla-javascript-or-jquery/

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.