package com.emrahizci.restreview.service.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import com.emrahizci.restreview.entity.BaseEntity;
import com.emrahizci.restreview.repository.BaseRepository;

@Component
public class UniqueValidator implements ConstraintValidator<UniqueName, String> {
    @Autowired
    private ApplicationContext applicationContext;

    private BaseRepository<? extends BaseEntity> repository;

    @Override
    public void initialize(UniqueName unique) {
        Class<? extends BaseRepository<? extends BaseEntity>> clazz = unique.service();
        String serviceQualifier = unique.serviceQualifier();

        if (!serviceQualifier.equals("")) {
            this.repository = this.applicationContext.getBean(serviceQualifier, clazz);
        } else {
            this.repository = this.applicationContext.getBean(clazz);
        }
    }

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
        return !this.repository.existsByName(name);
	}
}