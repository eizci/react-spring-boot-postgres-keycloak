import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';

import RestaurantList from "./components/restaurant/restaurant-list.component";
import AddRestaurant from "./components/restaurant/add-restaurant.component";
import Restaurant from "./components/restaurant/restaurant.component";
import { changeToken } from "./http-common";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Keycloak from 'keycloak-js'
import { config } from "./Constants";
import apiService from "./services/api.service";


class App extends Component {
  keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}/auth`,
    realm: "RestReviewKeycloak",
    clientId: "login-restreview"
  })
  initOptions = { pkceMethod: 'S256' }

  constructor(props){
    super(props);
    //this.state = {token: localStorage.getItem("token")};
  }

  async handleOnEvent(event, error) {
    if (event === 'onAuthSuccess') {
      if (this.keycloak.authenticated) {
        console.log(this.keycloak.token);
        let response = await apiService.getUserInfo(this.keycloak.token)
        if (response.status === 404) {
          const userExtra = { avatar: this.keycloak.tokenParsed.preferred_username }
          response = await apiService.saveUser(this.keycloak.token, userExtra)
          console.log('UserExtra created for ' + this.keycloak.tokenParsed.preferred_username)
        }
        this.keycloak['avatar'] = response.data.avatar
      }
    }
  }

  render() {
    const loadingComponent = (
          <div>Keycloak is loading
            <h3 style={{ color: '#4d4d4d' }}>or running authorization code flow with PKCE</h3>
          </div>
    )
  
  
     
    return (
      <ReactKeycloakProvider
      authClient={this.keycloak}
      initOptions={this.initOptions}
      LoadingComponent={loadingComponent}
      onEvent={(event, error) => this.handleOnEvent(event, error)}
      >

      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/restaurants"} className="navbar-brand" >
            fiyat-la
          </Link>
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/restaurants"} className="nav-link">
                Restaurants
              </Link>
            </li>
          </div>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link"  href="#" onClick={() => changeToken("")}>Logout</a>
            </li>
          </div>

        </nav>

        <div className="container mt-8">
          <Switch>
            <Route exact path={["/", "/restaurants"]} component={RestaurantList} />
            <Route exact path="/restaurant/add" component={AddRestaurant} />
            <Route path="/restaurant/:id" component={Restaurant} />
          </Switch>
        </div>
      </div>
      </ReactKeycloakProvider>
    );
  }
}

export default App;
