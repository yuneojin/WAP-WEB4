package com.project.web4.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Getter
@Setter
@Entity
public class QRcode {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long userQRNo;
    private String id;
    private String menu;
    private String corner;
    private int price;
}
