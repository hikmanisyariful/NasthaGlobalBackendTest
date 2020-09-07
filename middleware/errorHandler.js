module.exports = (err, req, res, next) => {
  let status = 500
  let errObj = {
    message: 'Internal Server Error'
  }

  res.status(status).json(errObj)
}