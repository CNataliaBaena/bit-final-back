import 'dotenv/config';

import bcrypt
  from 'bcryptjs';

import connectDB
  from './config/db.js';

import Usuario
  from './models/usuarios.js';

import dns
  from 'node:dns';


const createUsers =
  async () => {

    try {

      dns.setServers([

        '8.8.8.8',

        '8.8.4.4'

      ]);


      await connectDB();


      /* =========================
          LIMPIAR USUARIOS DEMO
      ========================= */

      await Usuario.deleteMany({

        email: {

          $in: [

            'admin@catcafe.com',

            'cliente@catcafe.com'

          ]

        }

      });


      /* =========================
          PASSWORDS
      ========================= */

      const adminPassword =

        await bcrypt.hash(

          'CatCafe_Admin_2026!',

          10

        );


      const clientPassword =

        await bcrypt.hash(

          'CatCafe_Cliente_2026!',

          10

        );


      /* =========================
          ADMIN
      ========================= */

      await Usuario.create({

        email:

          'admin@catcafe.com',

        password:

          adminPassword,

        role:

          'admin'

      });


      /* =========================
          CLIENTE
      ========================= */

      await Usuario.create({

        email:

          'cliente@catcafe.com',

        password:

          clientPassword,

        role:

          'cliente'

      });


      console.log(
        'Usuarios creados correctamente'
      );


      process.exit();

    } catch (error) {

      console.error(
        error
      );

      process.exit(1);

    }

  };


createUsers();