package org.example.dto;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.EXISTING_PROPERTY, property = "type", visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = MeatDto.class, name = "meat"),
        @JsonSubTypes.Type(value = SauceDto.class, name = "sauce")
})
public interface Product {
    public String getDescription();

}
