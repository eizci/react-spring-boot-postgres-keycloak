package com.emrahizci.restreview.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.emrahizci.restreview.entity.Restaurant;
import com.emrahizci.restreview.repository.RestaurantRepository;
import com.emrahizci.restreview.service.mapper.RestaurantMapper;
import com.emrahizci.restreview.service.request.RestaurantRequest;
import com.emrahizci.restreview.service.response.RestaurantsResponse;

@Service
public class RestaurantService {

	@Autowired
	private RestaurantRepository repository;
	@Autowired
	private RestaurantMapper mapper;
	
	public Restaurant findById(Long id) {
		return repository.findById(id).orElse(null);
	}

	public Restaurant createRestaurant(@Valid RestaurantRequest request) {
		Restaurant model = mapper.toModel(request);
		try {
			repository.save(model);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return model;
	}

	public RestaurantsResponse getRestaurants(Integer pageIndex, Integer pageSize) {
		Page<Restaurant> restaurantPage = repository.findAll(PageRequest.of(pageIndex, pageSize));
		return new RestaurantsResponse(restaurantPage.getContent(), restaurantPage.getTotalElements());
	}

	public RestaurantsResponse findRestaurantsByOwnerId(Long ownerId, Integer pageIndex, Integer pageSize) {
		Page<Restaurant> restaurantPage = repository.findByOwnerId(ownerId, PageRequest.of(pageIndex, pageSize));
		return new RestaurantsResponse(restaurantPage.getContent(), restaurantPage.getTotalElements());
	}
}