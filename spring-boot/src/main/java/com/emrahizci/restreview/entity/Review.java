package com.emrahizci.restreview.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="review")
@Getter
@Setter
public class Review extends BaseEntity {

	private static final long serialVersionUID = 7703434633794862744L;

	@OneToOne(fetch = FetchType.LAZY)
	@JsonIgnore 
	private Customer customer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore 
	private Restaurant restaurant;

	@OneToOne(fetch = FetchType.LAZY)
	@JsonIgnore 
	private Comment comment;

	private LocalDateTime dateVisited;
	
	private Short rating;
	
	private boolean isReplied;
}