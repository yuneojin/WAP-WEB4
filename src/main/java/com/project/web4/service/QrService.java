package com.project.web4.service;

import com.project.web4.domain.QRcode;
import com.project.web4.repository.QRcodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QrService {

    @Autowired
    QRcodeRepository qrCodeRepository;
    public void buy(QRcode qrCode){
        qrCodeRepository.save(qrCode);
    }
}
