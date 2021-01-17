import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "../containers/Main";
import SBB from "../applications/SBB";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Main>
                        <SBB/>
                    </Main>
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;

/*

 */
