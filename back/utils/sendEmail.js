const { SchemaTypeOptions } = require("mongoose");
const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "riveros546@hotmail.com",//correo de microsoft correo de salida
          pass: "ovummhowsbxfmbec"// constarseña de la aplicacion generada por microsoft
        }
      });
      const mensaje={
        from: "MapleShop <riveros546@hotmail.com>",// correo de microsoft correo de salida
        to: options.email,
        subject: options.subject,
        text: options.mensaje
      }

      await transport.sendMail(mensaje)
}

module.exports= sendEmail