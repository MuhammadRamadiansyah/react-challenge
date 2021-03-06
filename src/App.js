import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Category from './components/Category'
import NotFound from './components/404'
import Login from './components/Login'
import DetailArticle from './components/category/DetailArticle'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import NavbarHeader from './components/NavbarHeader'
import './components/Navbar.css'
import store from './stores/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarHeader />
          <Link className="navbarLink" to="/">Home</Link> 
          <Link className="navbarLink" to="/category"> Category</Link>
          <Link className="navbarLink" to="/login">Login</Link>
          {/* // <header className="App-header">
          //   <img src={logo} className="App-logo" alt="logo" />
          // </header> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/login" component={Login} />
            <Route path="/detail/:title" render= {
             (props => {
               if (store.getState().article) {
                 return <DetailArticle />
               } else {
                 return <Redirect to="/" />
               }
             })
           }/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
