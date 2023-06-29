CREATE TABLE team (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255)
);
CREATE TABLE player (
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (255),
 last_name VARCHAR (255),
 team_id INT NOT NULL REFERENCES team (id)
);
CREATE TABLE match (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  winner_team_id INT NOT NULL REFERENCES team (id),
  loser_team_id INT NOT NULL REFERENCES team (id)
);

INSERT INTO public.team
("name")
VALUES('Jonas Not Brothers');

INSERT INTO public.team
("name")
VALUES('Team Thomas');

INSERT INTO public.player
(first_name, last_name, team_id)
VALUES('Alice', 'Jonas', 1);

INSERT INTO public.player
(first_name, last_name, team_id)
VALUES('Bob', 'Jonas', 1);

INSERT INTO public.player
(first_name, last_name, team_id)
VALUES('Charles', 'Thomas', 2);

INSERT INTO public.player
(first_name, last_name, team_id)
VALUES('Debbie', 'Thomas', 2);

INSERT INTO public."match"
("date", winner_team_id, loser_team_id)
VALUES(CURRENT_DATE, 1, 2);
