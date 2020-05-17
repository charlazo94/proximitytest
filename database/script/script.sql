CREATE SCHEMA proximity;
CREATE TABLE proximity.service(
id uuid not null,
date DATE not null,
name varchar(32) not null,
document varchar(32) not null,
next timestamp not null,
service varchar(32) not null,
state varchar(16) not null,
CONSTRAINT pk_service PRIMARY KEY(id));