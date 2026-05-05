# 🧁 Cat Café Backend

Backend desarrollado con Node.js y Express para la plataforma **Cat Café**.

Implementa autenticación JWT, control de roles y gestión completa de productos, usuarios y pedidos.

---

# 👩‍💻 Desarrolladora

**Natalia Baena Cabas**

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

---

# ✨ Funcionalidades principales

## 👤 Usuarios

El sistema permite:

### Clientes

- Registro de cuenta
- Login
- Consulta de pedidos personales

### Administrador

- Login seguro
- Gestión total de pedidos
- Gestión completa de productos

---

## 🔐 Seguridad

Incluye:

- Encriptación de contraseñas con bcrypt
- Tokens JWT
- Middleware de autenticación
- Middleware de autorización por roles

Roles:

- admin
- cliente

---
Credenciales Admin

Email: admin@catcafe.com
Contraseña: CatCafe_Admin_2026!

---

## 🧁 Productos

CRUD completo:

- Crear productos
- Consultar productos
- Actualizar productos
- Eliminar productos

Cada producto incluye:

- Nombre
- Categoría
- Descripción
- Precio
- Ingredientes
- Instrucciones
- Imagen

---

## 📦 Pedidos

Permite:

- Crear pedidos
- Consultar pedidos
- Filtrar pedidos por usuario
- Actualizar estados

Estados:

- pendiente
- preparando
- entregado

Solo el administrador puede cambiar estados.

---

# 📂 Instalación

## 1. Clonar repositorio

git clone <repo-url>

## 2. Instalar dependencias

npm install

## 3. Crear archivo .env

PORT=4000

MONGO_URI=tu_uri_mongodb

JWT_SECRET=tu_secret_key

---

## 4. Ejecutar servidor

npm run dev

Servidor:

http://localhost:4000

---

# 📌 Endpoints principales

## Usuarios

POST /usuarios/register

POST /usuarios/login

---

## Productos

GET /productos

POST /productos

PUT /productos/:id

DELETE /productos/:id

---

## Pedidos

GET /pedidos

POST /pedidos

PUT /pedidos/:id

---

# 📌 Estado del proyecto

✅ Funcional y listo para presentación académica o despliegue.
