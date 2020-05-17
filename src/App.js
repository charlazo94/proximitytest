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

const services = [{
    id: 1,
    date: "2020-05-12",
    name: 'carlos',
    document: "115800828",
    next: "2020-05-13",
    service: "taxi",
    state: "pending"
},
    {
        id: 2,
        date: "2020-05-13",
        name: 'carlos',
        document: "115800828",
        next: "2020-05-13",
        service: "taxi",
        state: "pending"
    },
    {
        id: 3,
        date: "2020-05-14",
        name: 'juan',
        document: "115800828",
        next: "2020-05-13",
        service: "taxi",
        state: "pending"
    },
    {
        id: 4,
        date: "2020-05-15",
        name: 'carlos',
        document: "115800828",
        next: "2020-05-13",
        service: "camion",
        state: "pending"
    },
    {
        id: 5,
        date: "2020-05-13",
        name: 'pedro',
        document: "115800829",
        next: "2020-05-13",
        service: "taxi",
        state: "pending"
    },
    {
        id: 6,
        date: "2020-05-43",
        name: 'carlos',
        document: "115800828",
        next: "2020-05-13",
        service: "lancha",
        state: "pending"
    }];

function App() {
    return (
        <div className="App">
                <ListServicesView services={services}/>

        </div>
    );
}

export default App;
