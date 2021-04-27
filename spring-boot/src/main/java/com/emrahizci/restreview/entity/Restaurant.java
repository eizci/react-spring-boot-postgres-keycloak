package com.emrahizci.restreview.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="restaurant")
@Getter
@Setter
public class Restaurant extends BaseEntity {

	private static final long serialVersionUID = 7217841002285666411L;

	@OneToMany(fetch = FetchType.LAZY)
	@JsonIgnore 
	private List<Review> reviews;
	
	private Float averageRating;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore 
	private Owner owner;
}