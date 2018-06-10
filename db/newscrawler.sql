
USE `newscrawler`;
CREATE TABLE `article` (
   `id` int UNIQUE NOT NULL AUTO_INCREMENT,
   `date` varchar(40),
   `link` varchar(128),
   `hash` varchar(50) UNIQUE,
   `title` varchar(128),
   `dropline` varchar(1024),
   `body` varchar(2048),
   PRIMARY KEY(id)
);

insert into article values(1,'2018-06-10 12:30', 'https://www.lanacion.com.ar/2142540-mauricio-macri-el-peronismo-sabe-que-no-hay-mas-lugar-para-la-locura','3dfdf81f415ddb1f57b2dc1db6be2d5a','title','dropline','body' );
