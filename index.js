const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(cors())
app.use("/", express.static("public"))

const contactAddress = "henimezrani@gmail.com"

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: contactAddress,
    pass: process.env.PASSWORD,
  },
})

app.post("/send", (req, res) => {
  mailer.sendMail(
    {
      from: contactAddress,
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: `
      from: ${req.body.email} <br>
      name: ${req.body.name} <br>
      message: ${req.body.message || "[No message]"}
      `,
    },
    function (err, info) {
      if (err) {
        console.log(err)
        // Google doesnt support email and password anymore, find another solution
        return res.status(500).send(err)
      }
      res.json({ success: true })
    }
  )
})
app.listen(PORT || 3030, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
