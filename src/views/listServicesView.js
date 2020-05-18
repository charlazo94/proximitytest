import React from 'react';
import ServiceView from "./serviceView";
import {DataTable, dataReducer} from 'react-data-components';
import {CSVLink} from "react-csv";
import file from '../../src/files/services.csv';
import {readRemoteFile} from 'react-papaparse'
import AddServiceView from "./addServiceView";


class ListServicesView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popUp: false,
            service: undefined,
            services: undefined,
            selected: undefined,
            newPopUp: false,
        }
    }

    parseCsv() {
        return readRemoteFile(
            file,
            {
                complete: (results) => {

                    const dataFixed = [];
                    const data = results.data;
                    const headers = results.data[0];
                    const miniObject = {};
                    for (var i = 1; i < data.length; i++) {
                        const actual = data[i];
                        for (var j = 0; j <= headers.length; j++) {
                            miniObject[headers[j]] = actual[j];
                        }
                        dataFixed.push(miniObject);
                    }
                    this.setState({
                        ...this.state,
                        services: dataFixed
                    });
                }
            }
        )
    }


    componentWillMount() {
        this.parseCsv();
    }

    openClosePopUp = () => {
        this.setState({
            popUp: !this.state.popUp,
        })

    }

    openClosePopUpAdd = () => {
        this.setState({
            newPopUp: !this.state.newPopUp,
        })

    }

    downloadCsv(data, text) {
        const headers = [
            {label: 'Date', key: 'date'},
            {label: 'Name', key: 'name'},
            {label: 'Document', key: 'document'},
            {label: 'Next', key: 'next'},
            {label: 'Service', key: 'service'},
            {label: 'State', key: 'state'}
        ];
        return <CSVLink data={data} headers={headers} filename={`services-${new Date().toString()}-file.csv`}>
            {text}
        </CSVLink>
    }

    selectRow(row) {
        this.setState({selected: row, popUp: !this.state.popUp});
    }

    buildRowOptions(row) {
        return {
            onClick: this.selectRow.bind(this, row),
            className: typeof this.state.selected !== "undefined" && this.state.selected.id === row.id ? 'active' : null
        };
    }

    update = (item) => {
        const itemFound = this.state.services.findIndex(x => x.id === item.id)

        this.state.services[itemFound] = item;


        this.setState({
            popUp: !this.state.popUp,
            services: this.state.services
        })
    }

    delete = (item) => {
        const itemFound = this.state.services.findIndex(x => x.id === item.id);
        if (itemFound > -1) {
            this.state.services.splice(itemFound, 1);
            this.setState({
                popUp: !this.state.popUp,
                services: this.state.services
            })
        }
    }

    save = (item) => {

        const newServices = this.state.services;
        newServices.push(item);
        console.log(newServices)
        this.setState({
            newPopUp: !this.state.newPopUp,
            services: newServices
        });
        console.log(this.state.services)
    }

    renderList() {
        if (typeof this.state.services !== "undefined") {

            const columns = [
                {title: 'Date', prop: 'date'},
                {title: 'Name', prop: 'name'},
                {title: 'Document', prop: 'document'},
                {title: 'Next', prop: 'next'},
                {title: 'Service', prop: 'service'},
                {title: 'State', prop: 'state'}
            ];


            return <div className="listServicesContainer">
                <DataTable
                    className="container"
                    keys="id"
                    columns={columns}
                    initialData={this.state.services}
                    initialPageLength={5}
                    initialSortBy={{prop: 'name', order: 'descending'}}
                    pageLengthOptions={[5, 20, 50]}
                    buildRowOptions={this.buildRowOptions.bind(this)}/>
                {this.state.popUp ? <ServiceView service={this.state.selected} delete={this.delete} update={this.update}
                                                 toggle={this.openClosePopUp}/> : null}
                {this.state.newPopUp ? <AddServiceView add={this.save} toggle={this.openClosePopUpAdd}/> : null}
                <div className='buttons'>
                    <button onClick={this.openClosePopUpAdd}>Add</button>
                    {this.downloadCsv(this.state.services, 'Download All')}
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