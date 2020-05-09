import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";

import "./App.css";

const context = React.createContext({});
const { Consumer, Provider } = context;

function App() {
    return (
        <Provider value={"test"}>
            <div className="App App-header">
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/">
                                <LandingPage />
                                <Consumer>{(value) => <p>{value}</p>}</Consumer>
                            </Route>
                            <Route path="/profile">
                                <ProfilePage />
                            </Route>
                        </Switch>
                    </Layout>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
