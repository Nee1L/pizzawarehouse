package com.srp.user.repositories.specifications;

import com.srp.user.entities.ProjectTagLink;
import com.srp.user.entities.Tag;
import org.springframework.data.jpa.domain.Specification;

public class ProjectTagLinkSpecification {

    public static Specification<ProjectTagLink> hasTagId(Tag tag) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("tag"), tag);
    }
}
