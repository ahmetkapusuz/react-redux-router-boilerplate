import React, { Component } from 'react';
import UserList from './containers/UserList';
import DummyPage from './containers/DummyPage';
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">React Redux Boilerplate</h1>
            </header>
            <main className="Main">
                <Switch>
                    <Route path="/dummy" component={DummyPage} />
                    <Route path="/" component={UserList} />
                </Switch>
            </main>

        </div>
    );
  }
}

export default App;
