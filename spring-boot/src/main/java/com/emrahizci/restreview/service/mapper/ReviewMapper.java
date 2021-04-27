package com.emrahizci.restreview.service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.emrahizci.restreview.entity.Review;
import com.emrahizci.restreview.repository.CustomerRepository;
import com.emrahizci.restreview.repository.RestaurantRepository;
import com.emrahizci.restreview.service.request.ReviewRequest;

@Mapper(componentModel = "spring", uses = { RestaurantRepository.class, CustomerRepository.class})
public interface ReviewMapper {

	  ReviewRequest toRequest(Review review);
	
	  @Mapping(source = "restaurantId", target = "restaurant") 
	  @Mapping(source = "customerId", target = "customer") 
	  Review toModel(ReviewRequest request);
}