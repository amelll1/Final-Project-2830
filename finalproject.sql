-- MySQL dump for finalproject
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dropping existing tables to ensure fresh start
DROP TABLE IF EXISTS `artist`;
DROP TABLE IF EXISTS `genre`;
DROP TABLE IF EXISTS `playlist`;
DROP TABLE IF EXISTS `songs`;
DROP TABLE IF EXISTS `users`;

-- Creating tables with correct structure
CREATE TABLE `artist` (
  `artist_id` int NOT NULL,
  `artist_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `genre` (
  `genre_id` int NOT NULL,
  `genre_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `playlist` (
  `playlistName` varchar(45) NOT NULL,
  `song_id` varchar(45) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`playlistName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `songs` (
  `id` int NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `artist_id` int NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`),
  FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting initial data
-- Insert Genres:
INSERT INTO `genre` (`genre_id`, `genre_name`) VALUES
(1, 'Rock'), 
(2, 'Pop'), 
(3, 'Hip-Hop'), 
(4, 'Jazz'), 
(5, 'Classical');

-- Insert Artists:
INSERT INTO `artist` (`artist_id`, `artist_name`) VALUES
(1, 'The Rolling Stones'), 
(2, 'Taylor Swift'), 
(3, 'Kendrick Lamar'), 
(4, 'Miles Davis'), 
(5, 'Ludwig van Beethoven'), 
(6, 'Queen'), 
(7, 'Ariana Grande'), 
(8, 'Drake'), 
(9, 'John Coltrane'), 
(10, 'Wolfgang Amadeus Mozart'),
(11, 'The Beatles'), 
(12, 'Katy Perry'), 
(13, 'J. Cole'), 
(14, 'Herbie Hancock'), 
(15, 'Frédéric Chopin'),
(16, 'Led Zeppelin'), 
(17, 'Billie Eilish'), 
(18, 'Post Malone'), 
(19, 'Duke Ellington'), 
(20, 'Johann Sebastian Bach'),
(21, 'Pink Floyd'), 
(22, 'Lady Gaga'), 
(23, 'Lil Wayne'), 
(24, 'Thelonious Monk'), 
(25, 'Pyotr Ilyich Tchaikovsky'),
(26, 'Metallica'), 
(27, 'Dua Lipa'), 
(28, 'Travis Scott'), 
(29, 'Charles Mingus'), 
(30, 'Johannes Brahms'),
(31, 'Fleetwood Mac'), 
(32, 'Beyoncé'), 
(33, 'Nicki Minaj'), 
(34, 'Ornette Coleman'), 
(35, 'Antonio Vivaldi'),
(36, 'Nirvana'), 
(37, 'Ed Sheeran'), 
(38, 'Lil Nas X'), 
(39, 'Charlie Parker'), 
(40, 'Franz Schubert'),
(41, 'Guns N\ Roses'), 
(42, 'Adele'), 
(43, 'Cardi B'), 
(44, 'Sonny Rollins'), 
(45, 'Claude Debussy'),
(46, 'David Bowie'), 
(47, 'Miley Cyrus'), 
(48, 'Future'), 
(49, 'Art Blakey'), 
(50, 'Sergei Rachmaninoff'),
(51, 'Radiohead'), 
(52, 'Justin Bieber'), 
(53, 'SZA'), 
(54, 'Stan Getz'), 
(55, 'Maurice Ravel'),
(56, 'The Cure'), 
(57, 'Shakira'), 
(58, 'Kanye West'), 
(59, 'Cannonball Adderley'), 
(60, 'Gustav Mahler'),
(61, 'Foo Fighters'), 
(62, 'Camila Cabello'), 
(63, 'The Weeknd'), 
(64, 'Charlie Haden'), 
(65, 'Giuseppe Verdi');

-- Insert Songs:
INSERT INTO `songs` (`id`, `title`, `artist_id`, `genre_id`) VALUES
(1, 'Gimme Shelter', 1, 1),
(2, 'Shake It Off', 2, 2),
(3, 'HUMBLE.', 3, 3),
(4, 'So What', 4, 4),
(5, 'Symphony No. 9', 5, 5),
(6, 'Bohemian Rhapsody', 6, 1),
(7, 'Positions', 7, 2),
(8, 'God’s Plan', 8, 3),
(9, 'Blue Train', 9, 4),
(10, 'Requiem', 10, 5),
(11, 'Hey Jude', 11, 1),
(12, 'Firework', 12, 2),
(13, 'No Role Modelz', 13, 3),
(14, 'Chameleon', 14, 4),
(15, 'Ballade No. 1', 15, 5),
(16, 'Stairway to Heaven', 16, 1),
(17, 'Bad Guy', 17, 2),
(18, 'Circles', 18, 3),
(19, 'Take the "A" Train', 19, 4),
(20, 'Toccata and Fugue', 20, 5),
(21, 'Comfortably Numb', 21, 1),
(22, 'Poker Face', 22, 2),
(23, 'A Milli', 23, 3),
(24, 'Round Midnight', 24, 4),
(25, 'Swan Lake', 25, 5),
(26, 'Enter Sandman', 26, 1),
(27, 'New Rules', 27, 2),
(28, 'SICKO MODE', 28, 3),
(29, 'Better Get It in Your Soul', 29, 4),
(30, 'Hungarian Dance No. 5', 30, 5),
(31, 'Go Your Own Way', 31, 1),
(32, 'Single Ladies', 32, 2),
(33, 'Anaconda', 33, 3),
(34, 'Lonely Woman', 34, 4),
(35, 'The Four Seasons', 35, 5),
(36, 'Smells Like Teen Spirit', 36, 1),
(37, 'Shape of You', 37, 2),
(38, 'Old Town Road', 38, 3),
(39, 'Ornithology', 39, 4),
(40, 'Serenade', 40, 5),
(41, 'Sweet Child O Mine', 41, 1),
(42, 'Rolling in the Deep', 42, 2),
(43, 'Bodak Yellow', 43, 3),
(44, 'St. Thomas', 44, 4),
(45, 'Clair de Lune', 45, 5),
(46, 'Space Oddity', 46, 1),
(47, 'Wrecking Ball', 47, 2),
(48, 'Mask Off', 48, 3),
(49, 'Moanin', 49, 4),
(50, 'Piano Concerto No. 2', 50, 5),
(51, 'Karma Police', 51, 1),
(52, 'Peaches', 52, 2),
(53, 'Good Days', 53, 3),
(54, 'Desafinado', 54, 4),
(55, 'Boléro', 55, 5),
(56, 'Boys Dont Cry', 56, 1),
(57, 'Hips Dont Lie', 57, 2),
(58, 'Gold Digger', 58, 3),
(59, 'Work Song', 59, 4),
(60, 'Symphony No. 1', 60, 5),
(61, 'Everlong', 61, 1),
(62, 'Havana', 62, 2),
(63, 'Blinding Lights', 63, 3),
(64, 'First Song', 64, 4),
(65, 'Rigoletto', 65, 5),
(66, 'Purple Haze', 66, 1),
(67, 'Sorry', 67, 2),
(68, 'Lucid Dreams', 68, 3),
(69, 'Song for My Father', 69, 4),
(70, 'Tosca', 70, 5),
(71, 'Another Brick in the Wall', 71, 1),
(72, 'Just Dance', 72, 2),
(73, 'Mona Lisa', 73, 3),
(74, 'Giant Steps', 74, 4),
(75, 'La Mer', 75, 5),
(76, 'All Along the Watchtower', 76, 1),
(77, 'Dark Horse', 77, 2),
(78, 'Money Trees', 78, 3),
(79, 'My Favorite Things', 79, 4),
(80, 'Swan Lake', 80, 5),
(81, 'Heart-Shaped Box', 81, 1),
(82, 'I Will Always Love You', 82, 2),
(83, 'Lollipop', 83, 3),
(84, 'A Love Supreme', 84, 4),
(85, 'Für Elise', 85, 5);

-- Final touches:
SET FOREIGN_KEY_CHECKS = 1;
SET UNIQUE_CHECKS = 1;
SET SQL_MODE = 'TRADITIONAL';

-- Dump completed on 2024-04-22.
-- Ending commands
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
