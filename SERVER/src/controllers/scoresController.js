import * as sql from '../models/scores.dao.js'

export const scoreProduct = (req, res) => sql.scoreProduct(req.params.productId, req.body)
 .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

 export const findScoreProduct = (req, res) => sql.findScoreProduct(req.params.productId)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

 export const findScoreByUser = (req, res) => {
  console.log(req.params.userId)
  sql.findScoreByUser(req.params.productId, req.params.userId)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
 }

 export const updateScoreProduct = (req, res) => sql.updateScoreProduct(req.params.productId, req.body)
 .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
 .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))