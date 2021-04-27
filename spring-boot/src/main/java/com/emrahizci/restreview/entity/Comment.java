package com.emrahizci.restreview.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="comment")
@Getter
@Setter
@AllArgsConstructor
public class Comment extends BaseEntity {

	private static final long serialVersionUID = 1074733040399570688L;

	private String comment;
}