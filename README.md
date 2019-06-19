# Github pages Vuex Starter

This project generates a vuex app into ```/docs``` to be served with github pages.
This demo implements a rudimentary CMS

by [Max R. Eckardt](https://github.com/mehimself) 

## App Layout
Pages are mapped onto six pages of a cube. The cube turns to the page you navigate to. Each page is its own component. 
Urls and components are mapped in

```angular2
/src/router.js
```

Explore additional settings for i.e. font-scaling in 

```angular2
/src/store/state.js
```

## Texts

Each page has its own route name (home, portfolio, service, people, ...)
Page Markup is located at

```
/src/components/{route.name}
```
Some components are more complex and have nested components at that path.

Content presented in cards is stored in the data store. Each route with dynamic content has its own store module at

```
/src/store/{route.name}/state.js
```

Here you also find an array for the slides at the top of the page, if any.

The .body attributes in state.js accept HTML

---
##### _Quotation Marks_

There are three types of quotation marks for strings:
  - single quote ' holds a single line of string and can be escaped with \
  - double quotes " are equivalent to ' and conventient for single line strings
  - the new ` allows for complex strings that span over multiple lines without and even supports ${embedded expressions}

---

## Build Setup

This build requires NodeJS v10.16.0 ([instructions](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/))

``` bash
# install dependencies
npm install

# serve (webpack-dev-server) with hot reload at localhost:8080
# has some security issues, run it locally
npm start

# build for hosting by jekyll from /docs
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

