DELETE p
FROM Person p
JOIN (
    -- find the smallest id for each email
    SELECT email, MIN(id) AS min_id
    FROM Person
    GROUP BY email
) t ON p.email = t.email
WHERE p.id > t.min_id;