import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts';
import Landing from './pages/landing';
import NFTStaking from './pages/nftStaking';
import LayoutProvider from './Provider';

function App() {
  return (
    <Router>
      <Switch>
        <LayoutProvider>
          <Layout>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/nftStaking'>
              <NFTStaking />
            </Route>
          </Layout>
        </LayoutProvider>
      </Switch>
    </Router>
  );
}

export default App;
