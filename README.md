# Redux Plainify

Thunk [middleware](http://redux.js.org/docs/advanced/Middleware.html) for Redux.

## Why another middleware?

This middleware has one simple objective; convert all classes to pure objects. When instantiating classes in JavaScript, their constructor property is not Object, their constructor is the class, but they're essentially the same.

Since the redux library doesn't allow to pass non-pure objects as actions, this middleware simply turns them into pure objects to satisfy redux.

## Installation

```
npm install --save redux-plainify
```

Then, to enable Redux Plainify, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):

```js
import { createStore, applyMiddleware } from "redux";
import plainify from "redux-plainify";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(plainify));
```

## License

MIT
