package com.srp.user.repositories;

import com.srp.user.entities.ProjectTagLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectTagLinkRepository extends JpaRepository<ProjectTagLink, Long>, JpaSpecificationExecutor<ProjectTagLink> {
}
