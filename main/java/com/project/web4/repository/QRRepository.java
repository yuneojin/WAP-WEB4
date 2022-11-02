package com.project.web4.repository;

import com.project.web4.domain.QR;
import com.project.web4.domain.User1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QRRepository extends JpaRepository<QR, Long> {
    QR findById(String id);
    QR findByQr(String qr);
    //List<QR> findAll;);
    @Query("select u from QR u where u.id=:id and u.qr=:qr")
    QR selectQRInfo(@Param("id")String id, @Param("qr")String qr);
}
