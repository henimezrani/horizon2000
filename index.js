const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(cors())
app.use("/", express.static("public"))

const contactAddress = "henimezrani@gmail.com"

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "henimezrani@gmail.com",
    pass: "UPDATETHIS",
  },
})

app.post("/send", (req, res) => {
  console.log(req.body)
  mailer.sendMail(
    {
      from: req.body.email,
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]",
    },
    function (err, info) {
      if (err) {
        console.log(err)
        // Google doesnt support email and password anymore, find another solution
        return res.status(500).send(err)
      }
      console.log("sent")
      res.json({ success: true })
    }
  )
})
app.listen(PORT || 3030, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
