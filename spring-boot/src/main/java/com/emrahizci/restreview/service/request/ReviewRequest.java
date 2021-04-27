package com.emrahizci.restreview.service.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class ReviewRequest {

	@JsonIgnore 
	private long id;	

    @NotBlank(message = "Comment is mandatory")
    private String commentText;
    
    @NotNull(message = "restaurant is mandatorry")
    private Long restaurantId;
    
    @NotNull(message = "customerId is mandatorry")
    private Long customerId; //TODO get this from jwt for security
}
