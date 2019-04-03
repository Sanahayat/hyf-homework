show tables;
describe task;

# 1. Find out how many tasks are in the task table
select count(id)
from task;


# 2. Find out how many tasks in the task table do not have a valid due date
select count(id)
from task
where due_date is null;


# 3. Find all the tasks that are marked as done 
select task.id, task.title, task.status_id, status.name
from task join status
where task.status_id = status.id && status.name like "done%";
 

 # 4. Find all the tasks that are not marked as done
select task.id, task.title, task.status_id, status.name
from task join status
where task.status_id = status.id && status.name not like "done%";


# 5. Get all the tasks, sorted with the most recently created first
select *
from task
order by created desc; 


# 6. Get the single most recently created task
select *
from task
order by created desc
limit 0,1;


# 7. Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task
where title like "%database%" or description like "%database%";


# 8. Get the title and status (as text) of all tasks
select task.title, status.name
from task join status
where task.status_id = status.id;


# 9. Get the name of each status, along with a count of how many tasks have that status
select status.name, count(task.id)
from status join task on status.id = task.status_id
group by status.id; 


#10. Get the names of all statuses, sorted by the status with most tasks first
select status.name, count(task.id) as total
from status join task on status.id = task.status_id
group by status.id
order by total desc ; 
