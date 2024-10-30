CREATE DATABASE osmanager;

CREATE USER 'osmanager'@localhost IDENTIFIED BY '<password>';

GRANT ALL PRIVILEGES ON osmanager.* TO 'osmanager'@localhost;

CREATE TABLE user (
  id int auto_increment primary key,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  isMangager bool default 0,
  isAdmin bool default 0);

CREATE TABLE quote (
  id int auto_increment primary key,
  owner int not null references user (id),
  content varchar(500) not null,
  quotedPerson varchar(100),
  context varchar(150)
);