package com.emrahizci.restreview.service.request;

import javax.validation.constraints.NotBlank;

import com.emrahizci.restreview.repository.RestaurantRepository;
import com.emrahizci.restreview.service.validator.UniqueName;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class RestaurantRequest {

	@JsonIgnore 
	private long id;	

    @NotBlank(message = "Restaurant name is mandatory")
    @UniqueName(service = RestaurantRepository.class, message = "Restaurant name is already in use")
    private String name;
}
