import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import Spinner from './components/spinner/Spinner';

const Layout = loadable(() => import('./components/Layout/Layout'), {
  fallback: (
    <>
      <Spinner />
    </>
  ),
});
const Home = loadable(() => import('./pages/Home'));
const About = loadable(() => import('./pages/About'));
const Success = loadable(() => import('./pages/Success'));
const NotFound = loadable(() => import('./pages/404/Notfound'));

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/success" component={Success} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
