import React from 'react';


class ServiceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.service.id,
            date: this.props.service.date,
            name: this.props.service.name,
            document: this.props.service.document,
            next: this.props.service.next,
            service: this.props.service.service,
            state: this.props.service.state,

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
        this.props.update(newService);
    }
    delete = () => {
        const toDelete = this.state;
        this.props.delete(toDelete);
    }

    render() {
        return (<div className='modal'>
            <div className='modal_content'>
            <span className="close" onClick={this.handleClick}>
            &times;
          </span>
                <input type="text" disabled={true} value={this.state.id} onChange={this.valueChange.bind(this, 'id')}/>
                <input type="text" value={this.state.date} onChange={this.valueChange.bind(this, 'date')}/>
                <input type="text" value={this.state.name} onChange={this.valueChange.bind(this, 'name')}/>
                <input type="text" value={this.state.document} onChange={this.valueChange.bind(this, 'document')}/>
                <input type="text" value={this.state.next} onChange={this.valueChange.bind(this, 'next')}/>
                <input type="text" value={this.state.service} onChange={this.valueChange.bind(this, 'service')}/>
                <input type="text" value={this.state.state} onChange={this.valueChange.bind(this, 'state')}/>
                <div>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.delete}>Delete</button>
                </div>
            </div>
        </div>);
    }
};

export default ServiceView;