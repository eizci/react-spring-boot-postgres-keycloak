package com.emrahizci.restreview.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

import com.emrahizci.restreview.entity.Restaurant;

@Repository
public interface RestaurantRepository extends BaseRepository<Restaurant> {

	Page<Restaurant> findByOwnerId(Long ownerId, PageRequest request);
}