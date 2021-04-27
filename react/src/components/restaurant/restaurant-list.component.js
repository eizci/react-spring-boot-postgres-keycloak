import React, { Component } from "react";
import ApiService from "../../services/api.service";
import { Link } from "react-router-dom";
import AddRestaurant from "./add-restaurant.component";

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.retrieveCategories = this.retrieveCategories.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveRestaurant = this.setActiveRestaurant.bind(this);
    this.removeAllCategories = this.removeAllCategories.bind(this);

    this.state = {
      categories: [],
      currentRestaurant: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveCategories();
  }

  retrieveCategories() {
    ApiService.getAll()
      .then(response => {
        this.setState({
          categories: response.data.rows
        });
        console.log(response.categories);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCategories();
    this.setState({
      currentRestaurant: null,
      currentIndex: -1
    });
  }

  setActiveRestaurant(restaurant, index) {
    this.setState({
      currentRestaurant: restaurant,
      currentIndex: index
    });
  }

  removeAllCategories() {
    ApiService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { categories, currentRestaurant, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
        <h4 style = {{display: 'inline-block'}}>Categories</h4>
          {categories?.length > 0 && <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllCategories} >Remove All</button> 
          }
          <ul className="list-group">
            {categories &&
              categories.map((restaurant, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveRestaurant(restaurant, index)}
                  key={index}
                >
                  {restaurant.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-8">
          {currentRestaurant && 
            <div>
              <h4>Restaurant</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>
                {currentRestaurant.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentRestaurant.homepage}
              </div>

              <Link
                to={"/restaurant/" + currentRestaurant.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
            }
            <AddRestaurant retrieveCategories={this.retrieveCategories} />
         
        </div>
      </div>
    );
  }
}
