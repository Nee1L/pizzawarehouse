package com.srp.user.repositories;

import com.srp.user.entities.ProjectAttachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectAttachmentRepository extends JpaRepository<ProjectAttachment, Long> {
}
