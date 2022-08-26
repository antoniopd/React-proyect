import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to={'/'}>|| HOME |</Link>
          <Link to={'/about'}>| ABOUT |</Link>
          <Link to={'/faqs'}>| FAQs |</Link>
          <Link to={'/una404'}>| Not Existing Route ||</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/(about|faqs)'} component={AboutPage} />
            <Route path={'/profile'} component={ProfilePage} />
            <Route path={'/tasks'} component={TaskPage} />
            <Route path={'/tasks/:id'} component={TaskDetailPage} />
            {/* Buena practica dejar al final nuestra Page not found 404 */}
            <Route component={NotFoundPage} />
          </Switch>

        </main>

      </div>



    </Router>
  );
}

export default AppRoutingOne;
