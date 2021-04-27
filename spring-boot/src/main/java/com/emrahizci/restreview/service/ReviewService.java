package com.emrahizci.restreview.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.emrahizci.restreview.entity.Comment;
import com.emrahizci.restreview.entity.Review;
import com.emrahizci.restreview.repository.ReviewRepository;
import com.emrahizci.restreview.service.mapper.ReviewMapper;
import com.emrahizci.restreview.service.request.ReviewRequest;
import com.emrahizci.restreview.service.response.ReviewsResponse;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	@Autowired
	private ReviewMapper mapper;

	public Review findById(Long id) {
		return repository.findById(id).orElse(null);
	}

	public ReviewsResponse getReviews(Integer pageIndex, Integer pageSize) {
		Page<Review> reviewPage = repository.findAll(PageRequest.of(pageIndex, pageSize));
		return new ReviewsResponse(reviewPage.getContent(), reviewPage.getTotalElements());
	}

	public ReviewsResponse findReviewsByRestaurantId(Long restaurantId, Integer pageIndex, Integer pageSize) {
		Page<Review> reviewPage = repository.findByRestaurantId(restaurantId, PageRequest.of(pageIndex, pageSize));
		return new ReviewsResponse(reviewPage.getContent(), reviewPage.getTotalElements());
	}

	public Review createReview(ReviewRequest request) {
		Review review = mapper.toModel(request);
		review.setComment(new Comment(request.getCommentText()));
		repository.save(review);
		return review;
	}
}
