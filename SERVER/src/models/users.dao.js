import db from '../database/db.js'

export const register = ({ firstName, lastName, address, phoneNumber, email }, password) => db('INSERT INTO users (id, first_name, last_name, address, phone_number, password, email, photo_url) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, DEFAULT);', [firstName, lastName, address, phoneNumber, password, email])

export const login = ({ email }) => db('SELECT email, password FROM users WHERE email = $1;', [email])

export const findProfile = (email) => db('SELECT id, email, first_name, last_name, phone_number, address, photo_url FROM users WHERE email = $1;', [email])

export const deleteProfile = (id) => db('DELETE FROM users WHERE id = $1 RETURNING *;', [id])

export const updateProfile = (id, { firstName, lastName, address, phoneNumber, email }, password) => db('UPDATE users SET first_name = $2, last_name = $3, address = $4, phone_number = $5, email = $6, password = COALESCE($7, password) WHERE id = $1;', [id, firstName, lastName, address, phoneNumber, email, password])

export const updatePhotoProfile = (id, photoUrl) => db('UPDATE users SET photo_url = $2 WHERE id = $1;', [id, photoUrl])

export const defaultPhotoProfile = (id) => db('UPDATE users SET photo_url = DEFAULT WHERE id = $1 RETURNING *;', [id])
