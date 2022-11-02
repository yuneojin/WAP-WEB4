package com.project.web4.service;

import com.project.web4.domain.QR;
import com.project.web4.domain.User1;
import com.project.web4.repository.QRRepository;
import com.project.web4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QRService {

    @Autowired
    QRRepository qrRepository;

  /*  public void join(User1 user1){
        user1.setRole("USER");
        QRRepository.save(user1);
    }*/

    public QR QRUser(String id, String qr){
        QR QRInfo = qrRepository.selectQRInfo(id,qr);
        return QRInfo;
    }
}
