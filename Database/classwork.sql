/*--------Get all the tasks assigned to Pavel;-----------*/

SELECT user.name, user.email, task.id AS Task_ID, task.title, task.description
FROM `user`
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON task.id = user_task.task_id
WHERE
    user.name LIKE '%Pavel%'

    
/*--------Find how many tasks each user is responsible for-----------*/
SELECT user.name, COUNT(*) AS Total_Tasks
FROM `user`
    JOIN user_task ON user.id = user_task.user_id
GROUP BY
    user.name

/*--------------------- Find how many tasks with a status = Done each user is responsible for;--------------------*/
select user.name, COUNT(*) AS Status_Done
from
    `user`
    join user_task on user.id = user_task.user_id
    join task on task.id = user_task.task_id
    join status on status.id = task.status_id
WHERE
    status.name = 'Done'
GROUP BY
    user.id