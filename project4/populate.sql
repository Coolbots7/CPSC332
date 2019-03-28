USE cpsc332_project4;

INSERT INTO t_ArtStyle
     (Name)
VALUES
     ('Cubism'),
     ('Florentine'),
     ('Post-Impressionism'),
     ('Abstract Expressionism');

INSERT INTO t_ArtType
     (Name)
VALUES
     ('Painting'),
     ('Illustration'),
     ('Photograph'),
     ('Sculpture');

INSERT INTO t_Location
     (Name)
VALUES
     ('Hollywood, Los Angeles'),
     ('New York, New York'),
     ('Paris, France'),
     ('Austin, Texas'),
     ('Mougins, Spain'),
     ('Auvers-sur-Oise, France'),
     ('Zundert, Netherlands'),
     ('Chateau du Clos Luce, Amboise, France'),
     ('Anchiano, Italy'),
     ('Springs, NY'),
     ('Cody, WY');

INSERT INTO t_Artist
     (FirstName, LastName, PhoneNumber, Address, BirthPlace, Age, ArtStyleID)
VALUES
     ('Pablo', 'Picasso', '8885551234', 5, 5, 91, 1),
     ('Vincent', 'van Gogh', '8082345555', 6, 7, 37, 3),
     ('Leonardo', 'da Vinci', '9095559876', 8, 9, 67, 2),
     ('Jackson', 'Pollock', '5558884567', 10, 11, 44, 4);

INSERT INTO t_Artwork
     (ArtistID, Title, ArtStyleID, ArtTypeID, CreatedOn, PurchasedOn, Price, LocationID)
VALUES
     (1, 'Guernica', 1, 1, '1937-06-01', '1974-02-28', 1000000.01, 1),
     (2, 'The Starry Night', 3, 1, '1889-06-01', '1941-01-01', 50000000.00, 2),
     (3, 'Mona Lisa', 2, 1, '1503-01-01', '1797-01-01', 100.00, 3),
     (4, 'Mural', 4, 1, '1943-01-01', '2015-01-01', 150000000.00, 4);

INSERT INTO t_Customer
     (PhoneNumber, PreferredArtStyleID)
VALUES
     ('8881234567', 1),
     ('8089871234', 2),
     ('9094561234', 3),
     ('8887654321', 4);

INSERT INTO t_ArtShow
     (ArtistID, ShowDate, LocationID, ContactPhoneNumber, ContactName)
VALUES
     (1, '2019-04-01', 1, '1111111111', 'John Doe'),
     (2, '2020-06-23', 2, '2222222222', 'Jane Doe'),
     (3, '2019-11-16', 3, '3333333333', 'John Hancock'),
     (4, '2021-07-26', 4, '4444444444', 'Alexander Hamilton');
