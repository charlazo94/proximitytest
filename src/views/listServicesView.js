import React from 'react';
import ServiceView from "./serviceView";
import {DataTable, dataReducer} from 'react-data-components';

class ListServicesView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popUp: false,
            service: undefined,
            services: undefined
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

            return <div>
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
                    pageLengthOptions={[ 5, 20, 50 ]}/>
                {/*{this.state.popUp ? <ServiceView service={item} toggle={this.openClosePopUp}/> : null}*/}
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