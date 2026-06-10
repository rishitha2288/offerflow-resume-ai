const jwt = require("jsonwebtoken")

const User =
  require("../models/User")

const authMiddleware =
  async (req, res, next) => {

    try {

      const authHeader =
        req.headers.authorization

      if (!authHeader) {
        return res.status(401).json({
          message: "No token",
        })
      }

      const token =
        authHeader.split(" ")[1]

      const decoded =
        jwt.verify(
          token,
          "secretkey"
        )

      const user =
        await User.findById(
          decoded.id
        ).select("-password")

      req.user = user

      next()

    } catch (error) {

      res.status(401).json({
        message:
          "Invalid token",
      })
    }
}

module.exports =
  authMiddleware