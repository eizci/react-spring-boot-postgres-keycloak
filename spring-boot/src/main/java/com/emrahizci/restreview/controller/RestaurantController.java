package com.emrahizci.restreview.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.emrahizci.restreview.entity.Restaurant;
import com.emrahizci.restreview.service.RestaurantService;
import com.emrahizci.restreview.service.request.RestaurantRequest;
import com.emrahizci.restreview.service.response.RestaurantsResponse;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {

  @Autowired
  private RestaurantService restaurantService;

  @GetMapping("/{id}")
  public Restaurant getRestaurant(@PathVariable Long id) {
	return restaurantService.findById(id);
  }
  
  @GetMapping
  public RestaurantsResponse getRestaurants(
		  @RequestParam(required = false, defaultValue = "0") Integer pageIndex, 
		  @RequestParam(required = false, defaultValue = "50") Integer pageSize) {
	return restaurantService.getRestaurants(pageIndex, pageSize);
  }
  

  @GetMapping("/owner/{ownerId}")
  public RestaurantsResponse getRestaurantsByOwner(@PathVariable Long ownerId, 
		  @RequestParam(required = false, defaultValue = "0") Integer pageIndex, 
		  @RequestParam(required = false, defaultValue = "50") Integer pageSize) {
	return restaurantService.findRestaurantsByOwnerId(ownerId, pageIndex, pageSize);
  }
  
  @PostMapping
  public Restaurant createRestaurant(@Valid @RequestBody RestaurantRequest request) {
	return restaurantService.createRestaurant(request);
  }
}
