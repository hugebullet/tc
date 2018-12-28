DROP TABLE IF EXISTS advertisers;

CREATE TABLE advertisers (
  id INT NOT NULL,
  name VARCHAR(255),
  CONSTRAINT id_pk PRIMARY KEY (id)
);

INSERT INTO advertisers (id, name) VALUES
(1,'Mobile Games'),
(2,'Ads Inc'),
(3,'Advert.io'),
(4,'ClickBuy'),
(5,'YouCell');

