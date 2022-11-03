package com.project.web4.controller;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.project.web4.domain.QRcode;
import com.project.web4.service.QrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Controller
public class QRcodeController {

    @Autowired
    QrService qrService;

    @GetMapping("/coupon")
    public String couponPage(){
        return "coupon";
    }

    @GetMapping("/buyCoupon")
    public Object createQr(@RequestParam String menu) throws WriterException, IOException {
        int width = 200;
        int height = 200;
        BitMatrix matrix = new MultiFormatWriter().encode(menu, BarcodeFormat.QR_CODE, width, height);

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();) {
            MatrixToImageWriter.writeToStream(matrix, "PNG", out);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG)
                    .body(out.toByteArray());
        }
    }

    @RequestMapping(value = "/buyCoupon", method = RequestMethod.POST)
    public String buyCoupon(QRcode qrCode){
        qrService.buy(qrCode);
        return "coupon";
    }
}
