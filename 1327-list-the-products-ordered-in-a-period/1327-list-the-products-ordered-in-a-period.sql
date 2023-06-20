# Write your MySQL query statement below
SELECT Products.product_name, SUM(Orders.unit) as unit
FROM Products
JOIN Orders on Products.product_id = Orders.product_id
WHERE Orders.order_date >= '2020-02-01' AND Orders.order_date <= '2020-02-29' 
GROUP BY Orders.product_id
HAVING SUM(unit) >= 100;