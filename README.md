# 🐱⚙️ Cat Café Backend

Backend oficial de **Cat Café**, encargado de autenticación, productos, usuarios y pedidos.

Desarrollado con Node.js, Express y MongoDB.

---

# 👩‍💻 Desarrollado por

## Natalia Baena Cabas ✨

---

# 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|------------|------|
| 🟢 Node.js | Runtime |
| ⚡ Express | API REST |
| 🍃 MongoDB | Base de datos |
| 📦 Mongoose | ORM |
| 🔐 JWT | Autenticación |
| 🔒 bcrypt | Encriptación |
| ⚙️ dotenv | Variables de entorno |
| 🔄 Nodemon | Desarrollo |

---

# 🏗️ Arquitectura MVC

src/

┣ 📂 controllers  
┣ 📂 models  
┣ 📂 routes  
┣ 📂 middlewares  
┣ 📂 seed  
┣ 📂 config  

---

# ✨ Funcionalidades implementadas

## 🔐 Autenticación

✅ Login con JWT  
✅ Encriptación con bcrypt  
✅ Protección de endpoints  
✅ Middleware de autenticación  

---

# 👥 Roles del sistema

## 🛍️ Cliente

Puede:

✅ Iniciar sesión  
✅ Consultar productos  
✅ Crear pedidos  
✅ Ver sus pedidos  

---

## 👑 Administrador

Puede:

✅ Crear productos ➕  
✅ Editar productos ✏️  
✅ Eliminar productos 🗑️  
✅ Ver todos los pedidos 📦  
✅ Cambiar estados 🔄  
✅ Eliminar pedidos ❌  

---

# 📡 Endpoints disponibles

# 🔐 Auth

## Login

```http
POST /auth/login
```

---

# 🧁 Productos

## Obtener productos

```http id="ynv8cw"
GET /productos
```

## Crear producto

```http id="fhue5h"
POST /productos
```

## Actualizar producto

```http id="c11e39"
PUT /productos/:id
```

## Eliminar producto

```http id="jxt7vk"
DELETE /productos/:id
```

---

# 📦 Pedidos

## Crear pedido

```http id="q2l9m8"
POST /pedidos
```

## Obtener pedidos

```http id="r9t9qm"
GET /pedidos
```

## Actualizar estado

```http id="7cf8n0"
PUT /pedidos/:id
```

## Eliminar pedido

```http id="l1nnp4"
DELETE /pedidos/:id
```

---

# 🍃 Colecciones MongoDB

## 👤 Usuarios

Campos:

📧 email  
🔒 password  
👑 role  
📝 nombre  

---

## 🧁 Productos

Campos:

📝 name  
🏷️ category  
📄 description  
💰 price  
🥛 ingredients  
👨‍🍳 instructions  
🖼️ image  

---

## 📦 Pedidos

Campos:

👤 usuarioId  
🧁 productos  
💰 total  
📍 estado  
📅 fecha  

---

# 🔑 Credenciales Admin

## 👑 Administrador

📧 Email:

admin@catcafe.com

🔒 Password:

CatCafe_Admin_2026!

---

# ⚙️ Variables de entorno

Crear `.env`

```env
PORT=4000

MONGO_URI=tu_conexion

JWT_SECRET=tu_secret
```

---

# 📦 Instalación

## Instalar dependencias

```bash id="x2w5vx"
npm install
```

## Ejecutar servidor

```bash id="5bztc6"
npm run dev
```

---

# 🌍 URL local

```bash id="3r2x7n"
http://localhost:4000
```

---

# ✅ Estado del proyecto

🟢 API completamente funcional  
🚀 Lista para producción