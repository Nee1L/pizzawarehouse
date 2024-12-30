package com.srp.user.converters;

import com.srp.common.dto.TagDTO;
import com.srp.user.entities.Tag;
import org.springframework.stereotype.Component;

@Component
public class TagConverter {

    public TagDTO toDTO(Tag tag) {
        TagDTO result = new TagDTO();
        result.setId(tag.getId());
        result.setName(tag.getName());
        return result;
    }

    public Tag fromDTO(TagDTO tagDTO) {
        Tag result = new Tag();
        result.setId(tagDTO.getId());
        result.setName(tagDTO.getName());
        return result;
    }
}
