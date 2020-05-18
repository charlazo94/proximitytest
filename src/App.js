import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/serviceView.css';
import './style/listServicesView.css';
import 'react-data-components/css/table-twbs.css';
import './css/all.css';
import './css/fontawesome.css';
import './css/regular.css';
import './css/solid.css';
import './css/svg-with-js.css';
import './css/v4-shims.css';
import ListServicesView from "./views/listServicesView";
import csvRepository from "./data/csvRepository";

 function App() {

    return (
        <div className="App">
                <ListServicesView />

        </div>
    );
}

export default App;
