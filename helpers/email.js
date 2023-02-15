import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;


  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  ///Informacion del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com> ',
    to: email,
    subject: "UpTask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta",
    html: ` <p>Hola: ${nombre} Comprueba tu cuenta en Uptask </p>
    <p>Tu cuenta esta casi lista, solo debes comprobarla en el siguiente enlace:
    <a href="${process.env.FRONTED_URL}/confirmar/${token}">Comprobar Cuenta</a>
    </p>
    <p>Si tu no creaste esta cuenta, ignora este mensaje</p>
    `,
  });
};

export const emailOlividePassword = async (datos) => {
  const { email, nombre, token } = datos;


  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  ///Informacion del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com> ',
    to: email,
    subject: "UpTask - Reestablece tu password",
    text: "Reestablece tu password",
    html: ` <p>Hola: ${nombre} has solicitado reestablecer tu password </p>
    <p>Sigue el siguiente enlace para generar un nuevo password:
    <a href="${process.env.FRONTED_URL}/olvide-password/${token}">Reestablecer Password</a>
    </p>
    <p>Si tu no solicistate este email, ignora este mensaje</p>
    `,
  });
};
