package com.emrahizci.restreview.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.emrahizci.restreview.entity.Review;

@Repository
public interface ReviewRepository extends BaseRepository<Review> {
	Page<Review> findByRestaurantId(Long restaurantId, Pageable pageable);
}