# 🧁 Cupcake API - Backend

API REST desarrollada para gestionar recetas de cupcakes.
Permite realizar operaciones CRUD conectadas a una base de datos MongoDB.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

---

## 📦 Funcionalidades

✔ Crear recetas de cupcakes
✔ Obtener todas las recetas
✔ Obtener una receta por ID
✔ Actualizar recetas
✔ Eliminar recetas

---

## 🔗 Endpoints

Base URL:

```bash
http://localhost:4000/recipes
```

### 📌 Obtener todas las recetas

```http
GET /recipes
```

### 📌 Obtener una receta por ID

```http
GET /recipes/:id
```

### 📌 Crear receta

```http
POST /recipes
```

**Body (JSON):**

```json
{
  "name": "Cupcake de chocolate",
  "description": "Delicioso cupcake",
  "price": 5,
  "ingredients": "Harina, azúcar, cacao",
  "instructions": "Mezclar y hornear"
}
```

---

### 📌 Actualizar receta

```http
PUT /recipes/:id
```

---

### 📌 Eliminar receta

```http
DELETE /recipes/:id
```

---

## 📁 Estructura del proyecto

```bash
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── config/
 └── app.js / server.js
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <tu-repo>
cd cupcake-backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env`:

```env
PORT=4000
MONGODB_URI=tu_conexion_mongodb
```

4. Ejecutar el servidor:

```bash
npm run dev
```

o

```bash
node src/server.js
```

---

## 🧪 Pruebas

Puedes probar la API con:

* Postman
* Thunder Client
* Curl

---

## 🧠 Consideraciones

* Asegúrate de que MongoDB esté activo
* Verifica la conexión en `.env`
* Habilita CORS para conexión con el frontend

---

## 🛠 Posibles mejoras

* 🔐 Autenticación con JWT
* 📸 Subida de imágenes
* 🔍 Filtros y búsqueda
* 📊 Paginación
* ⭐ Sistema de valoraciones

---

## 👨‍💻 Autor Natalia Baena Cabas

Proyecto desarrollado como práctica Full Stack.

---
