import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";

import "./App.css";

function App() {
    return (
        <div className="App App-header">
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
