package com.emrahizci.restreview.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emrahizci.restreview.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}