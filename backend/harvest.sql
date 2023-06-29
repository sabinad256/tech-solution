CREATE TABLE organisation (
 id SERIAL PRIMARY KEY,
 name VARCHAR (255)
);

CREATE TABLE "user" (
 id SERIAL PRIMARY KEY,
 email VARCHAR (255),
 first_name VARCHAR (255),
 last_name VARCHAR (255),
 org_id INT NOT NULL REFERENCES organisation (id)
);

CREATE TABLE room (
 id SERIAL PRIMARY KEY,
 name VARCHAR (255),
 org_id INT NOT NULL REFERENCES organisation (id)
);

CREATE TABLE device (
 id SERIAL PRIMARY KEY,
 name VARCHAR (255),
 org_id INT REFERENCES organisation (id)
);

INSERT INTO public.organisation
("name")
VALUES('Harvest Technology');

INSERT INTO public.organisation
("name")
VALUES('Harvest Infinity');

INSERT INTO public."user"
("email","first_name","last_name","org_id")
VALUES('alice@harvesttechnology.com','Alice','Jones',1);

INSERT INTO public."user"
("email","first_name","last_name","org_id")
VALUES('bob@harvesttechnology.com','Bob','Jones',1);

INSERT INTO public."user"
("email","first_name","last_name","org_id")
VALUES('charles@harvestinfinty.com','Charles','Jones',2);

INSERT INTO public."user"
("email","first_name","last_name","org_id")
VALUES('daniel@harvestinfinty.com','Daniel','Jones',2);

INSERT INTO public."user"
("email","first_name","last_name","org_id")
VALUES('edward@harvestinfinty.com','Edward','Jones',2);

INSERT INTO public.room
("name","org_id")
VALUES('Room',1);

INSERT INTO public.room
("name","org_id")
VALUES('Room 1',2);

INSERT INTO public.room
("name","org_id")
VALUES('Room 2',2);

INSERT INTO public.device
("name")
VALUES('Nodecom');

INSERT INTO public.device
("name")
VALUES('Nodestream AVR2');

INSERT INTO public.device
("name")
VALUES('Nodestream Mini');

INSERT INTO public.device
("name")
VALUES('Nodestream Quad');

INSERT INTO public.device
("name")
VALUES('Wearwolf');
