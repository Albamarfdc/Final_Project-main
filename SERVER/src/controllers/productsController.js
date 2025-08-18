import * as sql from '../models/products.dao.js'

export const findProducts = (req, res) => sql.findProducts(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const findProductById = (req, res) => sql.findProductById(req.params.id)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const createProduct = (req, res) => sql.createProduct(req.body)
 .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

 export const findUserProducts = (req, res) => sql.findUserProducts(req.params.userId)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const updateProduct = (req, res) => sql.updateProduct(req.params.id, req.body)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const deleteProduct = (req, res) => sql.deleteProduct(req.params.productId)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const findScoreProduct = (req, res) => sql.findScoreProduct(req.params.id)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const scoreProduct = (req, res) => sql.scoreProduct(req.params.id, req.body.score)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
 