import React from 'react';

class CreateManufacturer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            hasSignedUp: false,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.hasSignedUp;

        const locationUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();

            const cleared = {
                name: '',
                hasSignedUp: true,
            };
            this.setState(cleared);
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    render() {
            let messageClasses = 'alert alert-success d-none mb-0';
            let formClasses = '';
            if (this.state.hasSignedUp) {
              messageClasses = 'alert alert-success mb-0';
              formClasses = 'd-none';
              setTimeout(() => window.location.replace(`http://localhost:3000/salespeople`), 3000)
            }
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <form className={formClasses} onSubmit={this.handleSubmit} id="create-sale-form">
                        <label>
                                <h2>Create a manufacturer</h2>
                                </label>
                            <div className="form-floating mb-3">
                                <input value={this.state.name} onChange={this.handleNameChange} placeholder="Manufacturer Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Manufacturer Name</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                  New Manufacturer Recorded!
                  </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateManufacturer;
