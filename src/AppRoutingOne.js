import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingOne() {
  return (
   <Router>
    <Switch>
      <Route exact path={'/'} component={ HomePage } />
      
      {/* Buena practica dejar al final nuestra Page not found 404 */}
      <Route component={ NotFoundPage } />
    </Switch>
   </Router>
  );
}

export default AppRoutingOne;
