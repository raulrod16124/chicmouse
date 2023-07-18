import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config();

const URL_AUTHORIZED_1 = process.env.VITE_ORIGIN_URL_1;
const URL_AUTHORIZED_2 = process.env.VITE_ORIGIN_URL_2;
const EMAIL = process.env.VITE_EMAIL;
const PASS = process.env.VITE_PASS;

const router = express.Router();

const app = express();
app.use(cors({
  origin: [URL_AUTHORIZED_1, URL_AUTHORIZED_2]
}));
app.use(express.json());
app.use("/", router);
app.listen(8080, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: EMAIL,
      subject: "Contact from chicmouse web form",
      html: `
        <h3 style="display: block;">New message</h3>
        <hr/>
        <br/>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
});