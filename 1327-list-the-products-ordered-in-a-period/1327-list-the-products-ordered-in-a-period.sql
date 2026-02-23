SELECT 
    p.product_name,
    o.total_unit AS unit
FROM (
    SELECT 
        product_id,
        SUM(unit) AS total_unit
    FROM Orders
    WHERE order_date >= '2020-02-01' 
      AND order_date < '2020-03-01'
    GROUP BY product_id
    HAVING SUM(unit) >= 100
) o
JOIN Products p
    ON o.product_id = p.product_id;