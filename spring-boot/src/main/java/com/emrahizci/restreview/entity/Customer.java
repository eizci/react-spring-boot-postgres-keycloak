package com.emrahizci.restreview.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="customer")
@Getter
@Setter
public class Customer extends BaseEntity {

	private static final long serialVersionUID = -9034581122867494757L;
}