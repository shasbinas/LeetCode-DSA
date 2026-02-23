SELECT
    p.product_id,
    COALESCE(
        (
            SELECT new_price
            FROM Products AS pr
            WHERE pr.product_id = p.product_id
              AND pr.change_date <= '2019-08-16'
            ORDER BY change_date DESC
            LIMIT 1
        ), 10
    ) AS price
FROM (
    -- Get all product IDs (from table or any known source)
    SELECT DISTINCT product_id FROM Products
) p;