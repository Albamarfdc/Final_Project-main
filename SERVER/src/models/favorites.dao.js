import db from '../database/db.js'

export const findLikeProducts = (userId) => db('SELECT p.id AS product_id, p.user_id, p.title, p.price, p.description, p.stock, p.image_url, p.category, f.id FROM favorites AS f INNER JOIN products AS p ON f.product_id = p.id WHERE f.user_id = $1;', [userId])

export const addToFavorites = (userId, productId) => db('INSERT INTO favorites (id, user_id, product_id) VALUES(DEFAULT, $1, $2);', [userId, productId])

export const removeFavorites = (userId, productId) => db('DELETE FROM favorites WHERE user_id = $1 AND product_id = $2;', [userId, productId])

export const isFavorite = (userId, productId) => db('SELECT COUNT(*) > 0 AS is_favorite FROM favorites WHERE user_id = $1 AND product_id = $2;', [userId, productId])
