package com.group3.eve.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@Configuration
public class MessageSourceConfig {
    private final MessageSourceBean messageSourceBean;

    @Autowired
    public MessageSourceConfig(MessageSourceBean messageSourceBean) {
        this.messageSourceBean = messageSourceBean;
    }

    @Bean
    public LocalValidatorFactoryBean getValidator() {
        LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();
        bean.setValidationMessageSource(messageSourceBean.messageSource());
        return bean;
    }
}
