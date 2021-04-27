import React from "react";
import ApiService from "../../services/api.service";

export default class AddRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveRestaurant = this.saveRestaurant.bind(this);
    this.newRestaurant = this.newRestaurant.bind(this);

    this.state = {
      id: null,
      name: "",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  saveRestaurant() {
    var data = {
      name: this.state.name,
      homepage: this.state.homepage
    };

    ApiService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          submitted: true
        });
        this.props.retrieveCategories();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newRestaurant() {
    this.setState({
      id: null,
      name: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newRestaurant}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <br />
            <br />
            <h4>new restaurant</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder = "enter name..."
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <button onClick={this.saveRestaurant} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
