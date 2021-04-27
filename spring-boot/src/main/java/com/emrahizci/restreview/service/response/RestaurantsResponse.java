package com.emrahizci.restreview.service.response;

import java.util.List;

import com.emrahizci.restreview.entity.Restaurant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RestaurantsResponse {
	private List<Restaurant> restaurants;
	private Long totalCount;
}
