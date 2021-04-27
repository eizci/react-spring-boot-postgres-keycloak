package com.emrahizci.restreview.service.response;

import java.util.List;

import com.emrahizci.restreview.entity.Review;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ReviewsResponse {
	private List<Review> reviews;
	private Long totalCount;
}
