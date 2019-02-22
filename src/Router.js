import React, { Component } from 'react';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';

import Admin from "./admin";
import Home from './pages/home'
import Buttons from './pages/ui/button'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modal'
import Loadings from './pages/ui/loading'
import Notifications from './pages/ui/notification'
import Messages from './pages/ui/message'
import Tabs from './pages/ui/tab'
import Gallery from './pages/ui/gallery'

class App extends Component {
  render() {
    return (
      <Router>
          <Admin>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/ui/buttons' component={Buttons} />
                <Route path='/ui/modals' component={Modals} />
                <Route path='/ui/loadings' component={Loadings} />
                <Route path='/ui/notifications' component={Notifications} />
                <Route path='/ui/messages' component={Messages} />
                <Route path='/ui/tabs' component={Tabs} />
                <Route path='/ui/gallery' component={Gallery} />
                <Route component={NoMatch} />
              </Switch>
          </Admin>
      </Router>
    );
  }
}

export default App;
