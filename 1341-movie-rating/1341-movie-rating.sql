WITH user_count AS (
    SELECT 
        u.name,
        COUNT(*) AS rated_count
    FROM Users u
    JOIN MovieRating mr ON u.user_id = mr.user_id
    GROUP BY u.user_id, u.name
),
movie_avg AS (
    SELECT 
        m.title,
        AVG(mr.rating) AS avg_rating
    FROM Movies m
    JOIN MovieRating mr ON m.movie_id = mr.movie_id
    WHERE mr.created_at BETWEEN '2020-02-01' AND '2020-02-29'
    GROUP BY m.movie_id, m.title
)
SELECT results
FROM (
    -- User with most rated movies
    SELECT name AS results
    FROM user_count
    ORDER BY rated_count DESC, name ASC
    LIMIT 1
) t1
UNION ALL
SELECT results
FROM (
    -- Movie with highest avg rating in Feb 2020
    SELECT title AS results
    FROM movie_avg
    ORDER BY avg_rating DESC, title ASC
    LIMIT 1
) t2;