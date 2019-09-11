// import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authorized from 'src/AuthorizedRoute';
import Home from 'src/views/Home';
import BasicLayout from 'src/layouts/BasicLayout';
import PersonalView from 'src/views/Personal';
import rootReducer from 'src/store';

import 'views/home.less';
import 'style/index.less';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Chrome redux 插件开启
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={BasicLayout} />
        <Route
          path="/test"
          component={() => {
            return <div>test</div>;
          }}
        />
        <Route
          path="/"
          component={() => {
            return (
              <div>
                <Home />
              </div>
            );
          }}
        />
        <Authorized path="/user" component={PersonalView} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
