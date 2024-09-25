use blog

CREATE table author (
    id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL
)

CREATE table post (
    id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) NOT NULL,
    body text NOT NULL,
    author_id int(10) unsigned NOT NULL,
    FOREIGN KEY (author_id) REFERENCES author (id)
)

CREATE Table tags (
    id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL
)

CREATE Table post_tags (
    id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id int(10) unsigned NOT NULL,
    tag_id int(10) unsigned NOT NULL,
    FOREIGN KEY (post_id) REFERENCES post (id),
    FOREIGN KEY (tag_id) REFERENCES tags (id)
)