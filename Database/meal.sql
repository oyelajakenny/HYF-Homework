-- Active: 1724583356944@@127.0.0.1@3306@meal_sharing

/* Get all meals */
SELECT *
from meal
    /* Add a new meal */
INSERT INTO
    meal
VALUES (
        10,
        'Beans',
        'Beans with honey and butter',
        'Abuja',
        '2017-10-20 01:41:53',
        5,
        100.99,
        '2017-10-04 07:19:56'
    )
    /* Get a meal with any id, fx 1 */

select *
FROM meal
WHERE
    meal.id = 1
    /* Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE meal
SET
    price = 20
where
    id = 1
    /* Delete a meal with any id, fx 1 */
DELETE FROM meal
WHERE
    id = 3
    /* Reservation Query*/
    /* Get all reservations */
select *
from reservation
    /* Add a new reservation */
INSERT INTO
    reservation
VALUES (
        10,
        6,
        6,
        '2017-10-20 01:41:53',
        '123456789',
        'Kenny Oyelaja',
        'kenny@gmail.com'
    )
    /* Get a reservation with any id, fx 1 */
SELECT *
from reservation
WHERE
    id = 10
    /* Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes */

update reservation
set
    max_reservations = 10
where
    id = 10
    /* Delete a reservation with any id, fx 1*/
DELETE from reservation
WHERE
    id = 2
    /* Review Query*/
    /* Get all reviews */
SELECT *
from review
    /* Add a new review */
INSERT INTO
    review
VALUES (
        10,
        'Excellent',
        'One of the best meals I’ve had, highly recommended!',
        5,
        9,
        '2019-03-14 08:45:37'
    )
    /* Get a review with any id, fx 1 */
SELECT *
from review
WHERE
    id = 10
    /* Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes */
update review
set
    title = 'Amazing'
where
    id = 10
    /* Delete a review with any id, fx 1*/
DELETE from review
WHERE
    id = 5
    /* ----------- Functionality --------------*/
    /* Get meals that has a price smaller than a value */
select *
from meal
WHERE
    meal.price < 90
    /* Get meals that still has available reservations */
SELECT *
from meal
WHERE
    meal.max_reservations >= 1
    /* Get meals that partially match a title. Rød grød med will match the recipies with the title Rød grød med fløde */
SELECT *
from meal
WHERE
    meal.title LIKE '%rice%'
    /* Get meals that has been created between two dates  */
SELECT *
from meal
WHERE
    meal.created_date BETWEEN '2017-10-20' AND '2017-10-21'
    /* Get only specific number of meals fx return only 5 meals */
SELECT *
from meal
LIMIT 5
    /* Get the meals that have good reviews */
select meal.id, meal.title, meal.description, review.title, review.stars
from meal
    JOIN review ON meal_id = review.meal_id
WHERE
    review.stars >= 5
    /* Get reservations for a specific meal sorted by created_date */
SELECT *
FROM Reservation
WHERE
    meal_id = 2
ORDER BY created_date DESC;

/*Sort all meals by average number of stars in the reviews*/

SELECT meal.title, AVG(review.stars) AS average_stars_ratings
FROM meal
    JOIN review ON meal.id = review.meal_id
GROUP BY
    meal.title
ORDER BY average_stars_ratings DESC