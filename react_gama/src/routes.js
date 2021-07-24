import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Repositories from './Repositories';
import Home from './Home';


export default function Routes(){
    return (
        <BrowserRouter>
            <switch>
                <Route path= '/' exact component={Home} />  
                <Route path='/repositories' component={Repositories} />
            </switch>
        </BrowserRouter>
    )
}