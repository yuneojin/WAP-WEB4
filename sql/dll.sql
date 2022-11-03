drop table if exists User CASCADE;
create table User
(
    userNo bigint generated by default as identity,
    name varchar(255),
    id varchar(255),
    primary key (userNo),
    email varchar(255),
    password varchar(255),
    role varchar(255)
);

drop table if exists USER_QR CASCADE;
create table USER_QR
(
    userQrNo bigint generated by default as identity,
    primary key (userQrNo),
    QRurl varchar(255),
    id varchar(255),
    menu varchar(255),
    corner varchar(255),
    price int(99999) not null
);
