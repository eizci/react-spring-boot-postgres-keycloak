package com.emrahizci.restreview.service.validator;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.emrahizci.restreview.entity.BaseEntity;
import com.emrahizci.restreview.repository.BaseRepository;

@Constraint(validatedBy = UniqueValidator.class)
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface UniqueName {

	String message() default "Name is already in use";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

	Class<? extends BaseRepository<? extends BaseEntity>> service();

	String serviceQualifier() default "";
}