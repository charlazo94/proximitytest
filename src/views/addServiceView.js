import React from 'react';
import uuid4 from 'uuid/v4';
import Moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class AddServiceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid4(),
            date: Moment(new Date()).format('YYYY-MM-DD'),
            name: "",
            document: "",
            next: undefined,
            service: "",
            state: "pending",
        }

    }

    handleClick = () => {
        this.props.toggle();
    };

    valueChange = (field, value) => {
        let state = {...this.state};
        state[field] = value.target.value;
        this.setState(state);
    }
    save = () => {
        const newService = this.state;
        newService["next"] = Moment(this.state.next).format('YYYY-MM-DD')
        this.props.add(newService);
    }

    handleChange = (date) => {
        this.setState({
            next: date
        });
    };

    render() {
        return (<div className='modal'>
            <div className='modal_content'>
            <span className="close" onClick={this.handleClick}>
            &times;
          </span>
                <label>Id:
                <input type="text" disabled={true} value={this.state.id} onChange={this.valueChange.bind(this, 'id')}/>
                </label>
                <label>Date
                <input type="text" disabled={true} value={this.state.date}
                       onChange={this.valueChange.bind(this, 'date')}/>
                </label>
                <label>Name:
                <input type="text" value={this.state.name} onChange={this.valueChange.bind(this, 'name')}/>
                </label>
                <label>
                    Document:
                <input type="text" value={this.state.document} onChange={this.valueChange.bind(this, 'document')}/>
                </label>
                <label>
                    Siguiente:
                <DatePicker
                    selected={this.state.next}
                    onChange={this.handleChange.bind(this)}
                />
                </label>
                <label>Servicio:
                <input type="text" value={this.state.service} onChange={this.valueChange.bind(this, 'service')}/>
                </label>
                <label>
                    Estado:
                <select value={this.state.state} onChange={this.valueChange.bind(this, 'state')}>
                    <option value="pending">Pendiente</option>
                    <option value="todo">a-realizar</option>
                    <option value="done">realizado</option>
                </select>
                </label>
                <div>
                    <button onClick={this.save}>Save</button>
                </div>
            </div>
        </div>);
    }
};

export default AddServiceView;