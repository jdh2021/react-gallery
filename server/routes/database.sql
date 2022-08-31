-- Initial Create Table Query

CREATE TABLE "gallery" (
	"id" serial primary key,
	"path" varchar (120) not null,
	"description" varchar (40) not null,
	"likes" integer
);

INSERT INTO "gallery" ("path", "description", "likes") 
VALUES 	('images/bell.jpg', 'Bell', 0),
		('images/ghost.jpg', 'Bhut Jolokia (Ghost)', 0),
		('images/goldencayenne.jpg', 'Golden Cayenne', 0),
		('images/habanero.jpg', 'Habanero', 0),
		('images/jalapeno.jpg', 'Jalapeno', 0),
		('images/poblano.jpg', 'Poblano', 0),
		('images/scotchbonnet.jpg', 'Scotch Bonnet', 0),
		('images/thai.jpg', 'Thai Chili', 0);