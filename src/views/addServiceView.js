import React from 'react';
import uuid4 from 'uuid/v4';
import Moment from 'moment';



class AddServiceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid4(),
            date: Moment(new Date()).format('YYYY-MM-DD'),
            name: "",
            document: "",
            next: "",
            service: "",
            state: "",

        }

    }

    handleClick = () => {
        this.props.toggle();
    };

    valueChange = (field, value) => {
        console.log(value.target.value)
        let state = {...this.state};
        state[field] = value.target.value;
        console.log(state)

        this.setState(state);
    }
    save = () => {
        const newService = this.state;
        console.log(newService)
        this.props.add(newService);
    }

    render() {
        return (<div className='modal'>
            <div className='modal_content'>
            <span className="close" onClick={this.handleClick}>
            &times;
          </span>
                <input type="text" disabled={true} value={this.state.id} onChange={this.valueChange.bind(this, 'id')}/>
                <input type="text" disabled={true} value={this.state.date} onChange={this.valueChange.bind(this, 'date')}/>
                <input type="text" value={this.state.name} onChange={this.valueChange.bind(this, 'name')}/>
                <input type="text" value={this.state.document} onChange={this.valueChange.bind(this, 'document')}/>
                <input type="text" value={this.state.next} onChange={this.valueChange.bind(this, 'next')}/>
                <input type="text" value={this.state.service} onChange={this.valueChange.bind(this, 'service')}/>
                <input type="text" value={this.state.state} onChange={this.valueChange.bind(this, 'state')}/>
                <div>
                    <button onClick={this.save}>Save</button>
                </div>
            </div>
        </div>);
    }
};

export default AddServiceView;