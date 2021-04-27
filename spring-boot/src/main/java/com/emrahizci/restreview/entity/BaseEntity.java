package com.emrahizci.restreview.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@MappedSuperclass
@Data
public class BaseEntity implements Serializable{

	private static final long serialVersionUID = 7638719544295484476L;

	@Id @GeneratedValue
    private Long id;
	
	@Column(unique=true)
	private String name;
    
	@JsonIgnore 
	private LocalDateTime createdAt;
    
	@JsonIgnore 
	private LocalDateTime updatedAt;

    public BaseEntity() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}