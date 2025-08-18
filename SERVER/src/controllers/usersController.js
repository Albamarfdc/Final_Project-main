import * as sql from '../models/users.dao.js'
import { jwtSign } from '../utils/jwt.js'
import { hashPass, comparePass } from '../utils/bcrypt.js'

export const register = (req, res) => {
  hashPass(req.body.password)
    .then(hashedPass => sql.register(req.body, hashedPass))
    .then(result => {
      if (result.code) {
        res.status(500).json({ status: false, code: 500, message: 'Ha ocurrido un error, vuelve a intentar' })
        return
      }
      res.status(201).json({ status: true, code: 201, message: 'Usuario creado exitosamente' })
    })
    .catch(error => res.status(500).json({ status: false, code: 500, message: error.message }))
}

export const login = (req, res) => {
  const { email, password } = req.body
  sql.login({ email })
    .then(users => {
      if (users.length === 0) {
        res.status(401).json({ status: false, code: 401, message: 'Usuario y/o contraseña incorrectas' })
        return
      }
      const user = users[0]
      return comparePass(password, user.password)
        .then(passwordMatch => {
          if (!passwordMatch) {
            res.status(401).json({ status: false, code: 401, message: 'Usuario y/o contraseña incorrectas' })
            return
          }

          const token = jwtSign(user.email)
          res.status(200).json({ status: true, code: 200, message: { token } })
        })
    })
    .catch(error => {
      res.status(500).json({ status: false, code: 500, message: error.message })
    })
}

export const findProfile = (req, res) => sql.findProfile(req.user)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const deleteProfile = (req, res) => sql.deleteProfile(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const updateProfile = (req, res) => {
  if (req.body.password) {
    hashPass(req.body.password)
    .then(hashedPass => sql.updateProfile(req.params.id, req.body, hashedPass))
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
  } else {
    sql.updateProfile(req.params.id, req.body)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
  }
}

export const updatePhotoProfile = (req, res) => sql.updatePhotoProfile(req.params.id, req.body.photoUrl)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const defaultPhotoProfile = (req, res) => sql.defaultPhotoProfile(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
