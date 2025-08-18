import * as sql from '../models/categories.dao.js'

export const findCategories = (req, res) => sql.findCategories()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
