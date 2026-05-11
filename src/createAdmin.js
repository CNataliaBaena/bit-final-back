import 'dotenv/config';

import bcrypt from 'bcryptjs';
import dns from 'node:dns';

import connectDB from './config/db.js';
import Usuario from './models/usuarios.js';


const createUsers = async () => {

  try {

    console.log('🔌 Conectando a MongoDB...');

    dns.setServers([
      '8.8.8.8',
      '8.8.4.4'
    ]);

    await connectDB();

    console.log('✅ Base de datos conectada');


    /* =========================
        LIMPIAR USUARIOS DEMO
    ========================= */

    console.log('🧹 Eliminando usuarios demo anteriores...');

    await Usuario.deleteMany({

      email: {

        $in: [
          'admin@catcafe.com',
          'cliente@catcafe.com'
        ]

      }

    });


    /* =========================
        ENCRIPTAR CONTRASEÑAS
    ========================= */

    console.log('🔐 Encriptando contraseñas...');

    const adminPassword = await bcrypt.hash(
      'CatCafe_Admin_2026!',
      10
    );

    const clientPassword = await bcrypt.hash(
      'CatCafe_Cliente_2026!',
      10
    );


    /* =========================
        CREAR ADMIN
    ========================= */

    await Usuario.create({

      email: 'admin@catcafe.com',

      password: adminPassword,

      role: 'admin'

    });

    console.log('👑 Usuario administrador creado');


    /* =========================
        CREAR CLIENTE
    ========================= */

    await Usuario.create({

      email: 'cliente@catcafe.com',

      password: clientPassword,

      role: 'cliente'

    });

    console.log('🛍️ Usuario cliente creado');


    /* =========================
        CREDENCIALES
    ========================= */

    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐱 CAT CAFÉ USERS READY
━━━━━━━━━━━━━━━━━━━━━━━━━━━

👑 ADMIN
📧 admin@catcafe.com
🔑 CatCafe_Admin_2026!

🛍️ CLIENTE
📧 cliente@catcafe.com
🔑 CatCafe_Cliente_2026!

━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

    process.exit(0);

  } catch (error) {

    console.error('❌ Error creando usuarios:', error);

    process.exit(1);

  }

};


createUsers();