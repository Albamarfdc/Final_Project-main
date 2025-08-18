CREATE DATABASE geekhub;

\c geekhub;

CREATE TABLE users(
id              SERIAL          NOT NULL,
first_name      VARCHAR(35)     NOT NULL,
last_name       VARCHAR(35)     NOT NULL,
address         VARCHAR(100)    NOT NULL,
phone_number    INT             NOT NULL,
password        VARCHAR(60)     NOT NULL,
email           VARCHAR(50)     NOT NULL UNIQUE,
photo_url       VARCHAR(255)    DEFAULT 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg',    
PRIMARY KEY (id)
);

CREATE TABLE products(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
title           VARCHAR(50)     NOT NULL,
price           INT             NOT NULL,
description     VARCHAR(300)    NOT NULL, 
stock           INT             NOT NULL,
image_url       VARCHAR(255)    NOT NULL,
category        VARCHAR(25)     NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE favorites(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
product_id      INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE scores(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
product_id      INT             NOT NULL,
score           INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
