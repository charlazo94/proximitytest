import React from 'react';
import ServiceView from "./serviceView";
import {DataTable, dataReducer} from 'react-data-components';
import { CSVLink } from "react-csv";

class ListServicesView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popUp: false,
            service: undefined,
            services: undefined,
            selected: undefined,
        }
    }

    componentDidMount() {
        console.log(dataReducer)
        if (typeof this.props.services !== "undefined") {
            this.setState({
                ...this.state,
                services: this.props.services
            });
        }
    }

    openClosePopUp = (item) => {
        this.setState({
            popUp: !this.state.popUp,
            service: item
        })

    }

    downloadCsv(data, text) {
        const headers = [
            { label: 'Date', key: 'date'  },
            { label: 'Name', key: 'name' },
            { label: 'Document', key: 'document' },
            { label: 'Next', key: 'next' },
            { label: 'Service', key: 'service' },
            { label: 'State', key: 'state' }
        ];
        return <CSVLink data={data} headers={headers} filename={`services-${new Date().toString()}-file.csv`}>
            {text}
        </CSVLink>
    }
    selectRow(row) {
        console.log(row.id)
        this.setState({ selected: row , popUp:!this.state.popUp});
    }
    buildRowOptions(row) {
        return {
            onClick: this.selectRow.bind(this, row),
            className: typeof this.state.selected !== "undefined" && this.state.selected.id === row.id ? 'active' : null
        };
    }

    renderList() {
        if(typeof this.state.services !== "undefined") {
            const columns = [
                { title: 'Date', prop: 'date'  },
                { title: 'Name', prop: 'name' },
                { title: 'Document', prop: 'document' },
                { title: 'Next', prop: 'next' },
                { title: 'Service', prop: 'service' },
                { title: 'State', prop: 'state' }
            ];


            return <div className="listServicesContainer">
                {/*<li className={!this.state.popUp ? 'row' : 'disabled'} key={item.id}
                    onClick={this.openClosePopUp.bind(this)}>
                    <div>{item.date}</div>
                    <div>{item.name}</div>
                    <div>{item.document}</div>
                    <div>{item.next}</div>
                    <div>{item.service}</div>
                    <div>{item.state}</div>
                </li>*/}
                <DataTable
                    className="container"
                    keys="id"
                    columns={columns}
                    initialData={this.state.services}
                    initialPageLength={5}
                    initialSortBy={{ prop: 'name', order: 'descending' }}
                    pageLengthOptions={[ 5, 20, 50 ]}
                    buildRowOptions={this.buildRowOptions.bind(this)}/>
              {this.state.popUp ? <ServiceView service={this.state.selected} toggle={this.openClosePopUp}/> : null}
              <div className='buttons'>
                <button>Add</button>
                {this.downloadCsv(this.state.services,'Download All')}
              </div>
            </div>
        } else return <div></div>
    }

    render() {
        return (<ul>
            {this.renderList()}
        </ul>);
    }
}

export default ListServicesView;