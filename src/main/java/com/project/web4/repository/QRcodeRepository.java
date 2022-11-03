package com.project.web4.repository;

import com.project.web4.domain.QRcode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QRcodeRepository extends JpaRepository<QRcode, Long> {

}
