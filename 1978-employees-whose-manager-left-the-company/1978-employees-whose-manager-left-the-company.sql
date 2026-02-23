SELECT e.employee_id
FROM Employees e
LEFT JOIN Employees m
    ON e.manager_id = m.employee_id
WHERE e.salary < 30000
  AND e.manager_id IS NOT NULL   -- employee has a manager
  AND m.employee_id IS NULL      -- manager left the company
ORDER BY e.employee_id;