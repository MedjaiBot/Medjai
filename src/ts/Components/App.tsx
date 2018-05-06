import * as React from 'react';
import './../../scss/app.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container} from "semantic-ui-react";

import {Header} from "./Header";
import {StartPage} from "./StartPage";

export class App extends React.Component<{}, {}> {
    render() {
        return <div>
            <Router>
                <Container fluid>
                    <Header/>
                    <Switch>
                        <Route path={"/"} exact render={() => {
                            return <StartPage/>;
                        }}>
                        </Route>
                        <Route path={"/extensions"} render={() => {
                            return <p>Extensions</p>;
                        }}/>
                        <Route path={"/settings"} render={() => {
                            return <p>Settings</p>;
                        }}/>
                    </Switch>
                </Container>
            </Router>
        </div>;
    }
}
