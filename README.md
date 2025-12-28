# HSK1 Study App 🇨🇳

Una aplicación web interactiva diseñada para estudiar y practicar el vocabulario del nivel 1 de HSK (Chino Mandarín).

## 📋 Requisitos Previos

Antes de empezar, asegúrate de tener instalado **Node.js** en tu ordenador.
- Puedes descargarlo aquí: [https://nodejs.org/](https://nodejs.org/) (se recomienda la versión **LTS**).

## 🚀 Cómo ejecutar la aplicación en tu ordenador

Sigue estos pasos para poner la aplicación en marcha:

1. **Abrir la terminal:**
   - En Windows: Busca "PowerShell" o "Símbolo del sistema" en el menú de inicio.
   - En Mac/Linux: Abre la aplicación "Terminal".

2. **Entrar en la carpeta del proyecto:**
   ```bash
   cd "C:\Users\vicen\Desktop\505\hsk1-study-app"
   ```

3. **Instalar las dependencias (solo la primera vez):**
   Este comando descargará todo lo necesario para que la app funcione.
   ```bash
   npm install
   ```

4. **Iniciar la aplicación:**
   Ejecuta el siguiente comando para arrancar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. **Ver la aplicación:**
   Una vez que la terminal diga que está listo, abre tu navegador web (Chrome, Edge, etc.) y ve a la dirección:
   👉 **http://localhost:5173**

---

## 🛠️ Funcionalidades principales

- **Flashcards:** Tarjetas interactivas para memorizar el Pinyin y el significado.
- **Quiz:** Puesta a prueba de conocimientos con preguntas aleatorias.
- **Lista de Vocabulario:** Acceso rápido a todas las palabras del HSK1.

## 📂 Estructura del Proyecto

- `src/components/`: Contiene los módulos de la interfaz (Flashcards, Quiz, etc.).
- `src/data/`: Archivo `hsk1Words.js` con toda la base de datos de palabras.

---
*Desarrollado con React + Vite + Tailwind CSS.*