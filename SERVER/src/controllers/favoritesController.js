import * as sql from '../models/favorites.dao.js'

export const findLikeProducts = (req, res) => sql.findLikeProducts(req.params.userId)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const addToFavorites = (req, res) => sql.addToFavorites(req.params.userId, req.body.productId)
  .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const removeFavorites = (req, res) => {
  console.log(req.params)
  console.log(req.body)
  sql.removeFavorites(req.params.userId, req.body.productId)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const isFavorite = (req, res) => {
  console.log(req.params)
  sql.isFavorite(req.params.userId, req.params.productId)
  .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}