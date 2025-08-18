import db from '../database/db.js'

export const findCategories = () => db('SELECT * FROM categories;')
