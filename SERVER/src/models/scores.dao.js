import db from '../database/db.js'

export const scoreProduct =  (productId, { userId, score }) => db('INSERT INTO scores (id ,product_id, user_id, score) VALUES (DEFAULT, $1, $2, $3) RETURNING*', [productId, userId, score])

export const findScoreProduct = (productId) => db('SELECT ROUND(AVG(score)) FROM scores WHERE product_id = $1;', [productId])

export const findScoreByUser = (productId, userId) => db('SELECT score FROM scores WHERE product_id = $1 AND user_id = $2;', [productId, userId])

export const updateScoreProduct = (productId, { userId, score }) => db('UPDATE scores SET score = $3 WHERE product_id = $1 AND user_id = $2;', [productId, userId, score])