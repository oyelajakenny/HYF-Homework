-- Active: 1724583356944@@127.0.0.1@3306@movie_app
CREATE Table `users` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci

CREATE Table `movies` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `genre_id` varchar(255) NOT NULL FOREIGN KEY,
    `director` varchar(255) NOT NULL,
    `release_date` DATETIME,
    `description` varchar(255) NOT NULL,
)

DROP TABLE movies

CREATE table `actors` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL
)

CREATE Table `genre` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    FOREIGN KEY
)

SELECT * FROM actors