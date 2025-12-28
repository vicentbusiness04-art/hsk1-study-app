# HSK1 Study App 🇨🇳

Una aplicación web interactiva para estudiar el vocabulario de Chino Mandarín (HSK1).

## 🚀 Cómo poner en marcha la aplicación

Sigue estos pasos en orden para ejecutar la app en tu ordenador:

### 1. Instalar Node.js (El motor)
Para que esta aplicación funcione, necesitas **Node.js**. 
- Descárgalo e instálalo desde aquí: [https://nodejs.org/](https://nodejs.org/) (Haz clic en el botón que dice **"LTS"**).
- Si ya lo tienes instalado, puedes saltar al siguiente paso.

### 2. Localizar los archivos del proyecto
Asegúrate de haber descargado este proyecto y haber extraído el archivo ZIP (si lo descargaste así). 
- Entra en la carpeta llamada `hsk1-study-app`. 
- Sabrás que estás en el lugar correcto porque verás archivos como `package.json`, `index.html` y una carpeta llamada `src`.

### 3. Abrir la Terminal en esta carpeta
Ahora necesitamos dar órdenes al ordenador desde dentro de esa carpeta:
- **En Windows:** Haz clic en la **barra de direcciones** de la carpeta (donde pone la ruta arriba, ej: `C:\Usuarios\Descargas...`), borra el texto, escribe la palabra `cmd` y pulsa la tecla **Enter**.
- **En Mac:** Haz clic derecho sobre la carpeta del proyecto y elige "Nuevo terminal en la carpeta".

### 4. Instalar y Ejecutar
En la ventana negra (terminal) que se acaba de abrir, escribe estos comandos (pulsa Enter después de cada uno):

1. **Instalar (solo la primera vez):** Descarga las piezas necesarias.
   ```bash
   npm install
   ```
2. **Arrancar:** Enciende la aplicación.
   ```bash
   npm run dev
   ```

### 5. ¡A estudiar!
Cuando la terminal muestre un enlace, abre tu navegador (Chrome, Edge o Safari) y ve a:
👉 **http://localhost:5173**

---

## 🛠️ ¿Qué puedes hacer con esta app?
- **Flashcards:** Tarjetas para memorizar palabras con Pinyin.
- **Quiz:** Examen rápido para medir tu progreso.
- **Lista:** Repaso de todo el vocabulario oficial HSK1.

---
*Desarrollado con React + Vite + Tailwind CSS.*
