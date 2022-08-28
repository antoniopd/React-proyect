import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import LoginPage from './pages/auth/LoginPage';
// import { useEffect } from 'react';
import TaskDetailpage from './pages/tasks/TaskDetailPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    },
  ]

  // useEffect(() => {
  //   logged = localStorage.getItem('credentials');
  //   console.log('User Logged?', logged)
  // }, []);


  return (
    <Router>
      <div>
        <aside>
          <Link to={'/'}>|| HOME |</Link>
          <Link to={'/about'}>| ABOUT |</Link>
          <Link to={'/faqs'}>| FAQs |</Link>
          <Link to={'/task/1'}>| Task 1 |</Link>
          <Link to={'/task/2'}>| Task 2 |</Link>
          <Link to={'/una404'}>| Not Existing Route |</Link>
          <Link to={'/login'}>| Login ||</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/online-state'} component={StatePage} />
            <Route path={'/login'} component={LoginPage}>
              {
                logged ?
                  () => {
                    alert('You are logged in. Redirecting to home...')
                    return (<Redirect to={'/'} />)
                  }
                  :
                  () => {
                    return (<LoginPage></LoginPage>)
                  }
              }
            </Route>
            <Route path={'/(about|faqs)'} component={AboutPage} />
            <Route path={'/profile'} component={ProfilePage}>
              {
                logged ? <ProfilePage />
                  :
                  () => {
                    alert('You must be logged in. Redirecting to login...')
                    return (<Redirect to={'/login'} />)
                  }
              }

            </Route>
            {/* Hay que proteger taks y tasks :id */}
            <Route path={'/tasks'} component={ TaskPage } />
            <Route 
              exact
              path={'/task/:id'}
              render= {
                ({match}) => (<TaskDetailpage task={taskList[match.params.id-1]} />)
              }
              >
               
            </Route>
            {/* Buena practica dejar al final nuestra Page not found 404 */}
            <Route component={NotFoundPage} />
          </Switch>

        </main>

      </div>



    </Router>
  );
}

export default AppRoutingOne;
