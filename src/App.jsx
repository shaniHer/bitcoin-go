import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { connect } from 'react-redux'
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { SignupPage } from './pages/SignupPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage';
import { AppHeader } from './cmps/AppHeader';


//when components are wrapped with Router they receive al lthe props(history,params..) only if they are 
//a route but their children cmps don't receive the props
function _App({ loggedInUser }) {

  const PrivateRoute = (props) => {
    return loggedInUser ? <Route path={props.path} component={props.component} /> : <Redirect to="/signup" />
  }

  return (
    <Router>
      <main className="main-layout">
        <AppHeader />
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEditPage} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <PrivateRoute exact path="/contact" component={ContactPage} />
          <Route path="/statistic" component={StatisticPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  }
}

export const App = connect(mapStateToProps)(_App)

