
/* --------------------Working with tasks-----------------------*/

insert into
    task (
        id,
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
values (
        36,
        'Clean Fridge',
        'Clear the fridge on saturday morning.',
        '2018-10-25 06:54:16 ',
        '2018-10-15 13:05:09 ',
        '2024-11-17 13:05:09',
        2,
        1
    );

UPDATE task SET title = 'Clear Fridge' WHERE id = 36;

UPDATE task SET due_date = '2024-12-17 13:05:09' WHERE id = 36;

UPDATE task SET status_id = 1 WHERE id = 36;

UPDATE task SET user_id = 3 WHERE id = 36;

DELETE from task WHERE id = 36


/*--------------------School database-----------------------*/

SET NAMES utf8mb4;

create database student_database

use student_database

CREATE Table `class` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `begin_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
)

CREATE Table `student` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `email` varchar(255) NULL,
    `phone` varchar(255) NULL,
    `class_id` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
)

CREATE table `status` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
)

INSERT INTO
    class
VALUES (
        1,
        'JavaScript',
        '2023-10-20 01:41:53',
        '2024-10-04 07:19:56'
    )

INSERT INTO
    student
VALUES (
        1,
        'Oyelaja Hussein',
        'Oyelajakenny@gmail.com',
        '45303505',
        1
    )

INSERT INTO status VALUES (1, 'Not-Started')

INSERT INTO status VALUES (2, 'Ongoing')

INSERT INTO status VALUES (3, 'Finished')

/* ----------------More queries------------------*/

/* Get all the tasks assigned to users whose email ends in @spotify.com */
SELECT user.id, user.name, user.email, user.phone, task.id, task.title, task.description
FROM `user`
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON task.id = user_task.task_id
WHERE
    user.email LIKE '%@spotify.com'

/* Get all the tasks for 'Donald Duck' with status 'Not Started' */
SELECT user.name, user.email, task.id, task.title, task.description, status.name
FROM
    `user`
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON task.id = task_id
    JOIN status ON status.id = status_id
WHERE
    USER.NAME = 'Donald Duck'
    AND status.name = 'Not Started';

/* Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
*/
SELECT user.name, user.email, task.id, task.title, task.description, task.created AS Month_Created
FROM
    `user`
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON task.id = task_id
WHERE
    user.name = 'Maryrose Meadows'
    AND MONTH(task.created) = 09

/* Find how many tasks where created in each month, e.g. how many tasks were created in each month.*/
select month(created) AS Month_Created, COUNT(*) AS Total_Tasks
FROM task
GROUP BY
    MONTH(created)