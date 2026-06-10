const authRoutes =
  require("./src/routes/authRoutes")

const applicationRoutes =
  require("./src/routes/applicationRoutes")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB =
  require("./src/config/db")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(
  "/uploads",
  express.static("uploads")
)

app.use(
  "/api/auth",
  authRoutes
)

app.use(
  "/api/applications",
  applicationRoutes
)

app.get("/", (req, res) => {
  res.send("OfferFlow API Running")
})

const PORT =
  process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})