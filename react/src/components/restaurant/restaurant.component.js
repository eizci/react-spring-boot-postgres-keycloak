import React, { Component } from "react";
import ApiService from "../../services/api.service";
import RestaurantList from "./restaurant-list.component";

export default class Restaurant extends Component {
  state = {
    currentRestaurant: {},
    message: ""
  };
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeHomePage = this.onChangeHomePage.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateRestaurant = this.updateRestaurant.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    console.log("mymarket:", this.props.match.params.id);
  
  }

  componentDidMount() {
    this.getRestaurant(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentRestaurant: {
          ...prevState.currentRestaurant,
          name: name
        }
      };
    });
  }

  onChangeHomePage(e) {
    const homepage = e.target.value;

    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        homepage: homepage
      }
    }));
  }

  getRestaurant(id) {
    ApiService.get(id)
      .then(response => {
        this.setState({
          currentRestaurant: response.data.restaurants[0]
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentRestaurant.id,
      name: this.state.currentRestaurant.name,
      homepage: this.state.currentRestaurant.homepage,
      published: status
    };

    ApiService.update(this.state.currentRestaurant.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentRestaurant: {
            ...prevState.currentRestaurant,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateRestaurant() {
    ApiService.update(
      this.state.currentRestaurant.id,
      this.state.currentRestaurant
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The restaurant was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteRestaurant() {    
    ApiService.delete(this.state.currentRestaurant.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/categories')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentRestaurant } = this.state;
    console.log("render",currentRestaurant);
    return (
        currentRestaurant ? (
         <div className="row">

    <div className="edit-form col-md-3" style={{    backgroundColor: '#454b5a24'}}>
          <h4>Restaurant</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={currentRestaurant.name }
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="homepage">HomePage</label>
              <input
                type="text"
                className="form-control"
                id="homepage"
                defaultValue={currentRestaurant.homepage}
                onChange={this.onChangeHomePage}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentRestaurant.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentRestaurant.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => this.updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => this.updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button
            className="badge badge-danger mr-2"
            onClick={this.deleteRestaurant}
          >
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={this.updateRestaurant}
          >
            Update
          </button>
          <p>{this.state.message}</p>
        </div>
 
 
        <div className="col-md-9">
           {currentRestaurant.id && <RestaurantList restaurant = {currentRestaurant} /> }
        </div>
 
         </div>      ) : ""
    );
  }
}
