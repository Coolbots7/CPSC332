DROP DATABASE IF EXISTS cpsc332_project4;
CREATE DATABASE cpsc332_project4;
USE cpsc332_project4;

CREATE TABLE t_ArtStyle (
	ArtStyleID INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(100),
	PRIMARY KEY (ArtStyleID),
	UNIQUE(Name)
);

CREATE TABLE t_ArtType (
	ArtTypeID INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(100),
	PRIMARY KEY(ArtTypeID),
	UNIQUE(Name)
);

CREATE TABLE t_Location (
	LocationID INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(100),
	PRIMARY KEY (LocationID),
	UNIQUE(Name)
);

CREATE TABLE t_Artist (
	ArtistID INT NOT NULL AUTO_INCREMENT,
	FirstName VARCHAR(100) NOT NULL,
	LastName VARCHAR(100) NOT NULL,
	PhoneNumber VARCHAR(10) NOT NULL,
	Address INT NOT NULL,
	BirthPlace INT NOT NULL,
	Age INT NOT NULL,
	ArtStyleID INT NOT NULL,
	PRIMARY KEY (ArtistID),
	UNIQUE(FirstName, LastName),
	FOREIGN KEY (ArtStyleID) REFERENCES t_ArtStyle(ArtStyleID),
	FOREIGN KEY (BirthPlace) REFERENCES t_Locaiton(LocationID),
	FOREIGN KEY (Address) REFERENCES t_Locaiton(LocationID)
);

CREATE TABLE t_Artwork (
	ArtworkID INT NOT NULL AUTO_INCREMENT,
	ArtistID INT NOT NULL,
	Title VARCHAR(100) NOT NULL,
	ArtStyleID INT NOT NULL,
	ArtTypeID INT NOT NULL,
	CreatedOn DATE,
	PurchasedOn DATE NOT NULL,
	Price FLOAT NOT NULL,
	LocationID INT NOT NULL,
	PRIMARY KEY (ArtworkID),
	UNIQUE(Title),
	FOREIGN KEY (ArtistID) REFERENCES t_Artist(ArtistID),
	FOREIGN KEY (ArtStyleID) REFERENCES t_ArtStyle(ArtStyleID),
	FOREIGN KEY (ArtTypeID) REFERENCES t_ArtType(ArtTypeID),
	FOREIGN KEY (LocationID) REFERENCES t_Location(LocationID)
);

CREATE TABLE t_Customer (
	CustomerID INT NOT NULL AUTO_INCREMENT,
	PhoneNumber VARCHAR(10) NOT NULL,
	PreferredArtStyleID INT NOT NULL,
	PRIMARY KEY (CustomerID),
	UNIQUE (PhoneNumber),
	FOREIGN KEY (PreferredArtStyleID) REFERENCES t_ArtStyle(ArtStyleID)
);

CREATE TABLE t_ArtShow (
	ArtShowID INT NOT NULL AUTO_INCREMENT,
	ArtistID INT NOT NULL,
	ShowDate DateTime NOT NULL,
	LocationID INT NOT NULL,
	ContactName VARCHAR(100) NOT NULL,
	ContactPhoneNumber VARCHAR(10) NOT NULL,
	PRIMARY KEY (ArtShowID),
	UNIQUE (ArtistID, ShowDate),
	FOREIGN KEY (ArtistID) REFERENCES t_Artist(ArtistID),
	FOREIGN KEY (LocationID) REFERENCES t_Location(LocationID)
);

CREATE USER IF NOT EXISTS 'cpsc332webapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'w3bapppa$$w0rd';
GRANT SELECT, EXECUTE ON cpsc332_project4.* TO 'cpsc332webapp'@'localhost';
FLUSH PRIVILEGES;
