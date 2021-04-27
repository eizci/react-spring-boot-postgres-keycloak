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

import com.emrahizci.restreview.entity.Review;
import com.emrahizci.restreview.service.ReviewService;
import com.emrahizci.restreview.service.request.ReviewRequest;
import com.emrahizci.restreview.service.response.ReviewsResponse;

@RestController
@RequestMapping("/api/review")
public class ReviewController {

  @Autowired
  private ReviewService reviewService;

  @GetMapping("/{id}")
  public Review getReview(@PathVariable Long id) {
	return reviewService.findById(id);
  }

  @GetMapping
  public ReviewsResponse getReviews(
		  @RequestParam(required = false, defaultValue = "0") Integer pageIndex, 
		  @RequestParam(required = false, defaultValue = "50") Integer pageSize) {
	return reviewService.getReviews(pageIndex, pageSize);
  }
  

  @GetMapping("/restaurant/{restaurantId}")
  public ReviewsResponse getRestaurantReviews(@PathVariable Long restaurantId, 
		  @RequestParam(required = false, defaultValue = "0") Integer pageIndex, 
		  @RequestParam(required = false, defaultValue = "50") Integer pageSize) {
	return reviewService.findReviewsByRestaurantId(restaurantId, pageIndex, pageSize);
  }

  @PostMapping
  public Review createRestaurant(@Valid @RequestBody ReviewRequest request) {
	return reviewService.createReview(request);
  }
}
