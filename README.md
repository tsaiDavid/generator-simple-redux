# generator-simple-redux

A simple, yet comprehensive React + Redux application, complete with DevTools.

Author: [@tsaiDavid](https://github.com/tsaiDavid/) | [www.davidtsai.codes](https://www.davidtsai.codes)

###Overview###

This is the perfect way to start any React + Redux application - **especially if you're looking for a middle-ground**. The intention behind this generator / starter-kit is to offer the user just the right amount of tools and boilerplate to hit the ground running, while minimizing bulk and overhead.

###Features###

  - React
  - Babel 6 w/ basic presets and transform
  - Webpack w/ basic dev and prod configurations
  - Express development server; easily roll out a production enabled server of your own
  - Eslint w/ basic configs

###Usage###

This generator is to be used with **yo**.

###Roadmap###

 - [x] Scaffold working **yeoman generator-simple-redux** version of "react-transform-boilerplate"
 - [x] Publish *beta* package to **npm**: https://www.npmjs.com/package/generator-simple-redux
 - [ ] Utilize latest EJS templating to allow user customization of files (package.json, index.html, etc)
 - [ ] Implement Redux
 - [ ] Implement Redux DevTools
 - [ ] Add basic styles and enable webpack compilation of CSS/SASS

###Credits###

>This generator is initially based on [@gaeron's](https://github.com/gaeron) awesome [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate).

This project supports [Babel 6](https://github.com/babel/babel), with reference implementations of:

 **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)**. It can be used as a boilerplate for quickly getting a new project up and running with a few useful transforms:

* [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr) - enables hot reloading react components
* [**react-transform-catch-errors**](https://github.com/gaearon/react-transform-catch-errors) - catches errors inside `render()`

For convenience they are packed in a single preset called [**react-transform-hmre**](https://github.com/danmartinez101/babel-preset-react-hmre) but you can make your own.

Syntax errors are displayed in an overlay using **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)**, which replaces Webpack Dev Server. This project **[does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.
