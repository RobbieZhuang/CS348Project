SELECT s.name, c.code, c.name FROM course c LEFT OUTER JOIN subject s on c.subject_id = s.subject_id;