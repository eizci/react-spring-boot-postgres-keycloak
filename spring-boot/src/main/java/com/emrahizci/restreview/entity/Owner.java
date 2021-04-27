package com.emrahizci.restreview.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="owner")
@Getter
@Setter
public class Owner extends BaseEntity {

	private static final long serialVersionUID = -9034581122867494757L;
	
	@OneToMany(fetch = FetchType.LAZY)
	@JsonIgnore 
	private List<Restaurant> restaurants;

}