package com.emrahizci.restreview.service.mapper;

import org.mapstruct.Mapper;

import com.emrahizci.restreview.entity.Restaurant;
import com.emrahizci.restreview.service.request.RestaurantRequest;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

	RestaurantRequest toRequest(Restaurant restaurant);
    Restaurant toModel(RestaurantRequest request);
}