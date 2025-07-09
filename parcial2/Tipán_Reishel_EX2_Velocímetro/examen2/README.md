# Velocímetro Digital

Aplicación web que simula un velocímetro digital desarrollado con Angular 19.

## Instrucciones para ejecutar con Docker

### 1. Crear la imagen Docker (ajusta el usuario si es necesario)
docker build -t reirei05/velocimetro-digital .

### 2. Iniciar sesión en Docker Hub (te pedirá usuario y contraseña)
docker login

### 3. Subir la imagen a Docker Hub (opcional)
docker push reirei05/velocimetro-digital

### 4. Crear y ejecutar el contenedor
docker run -d -p 8082:80 --name velocimetro-container reirei05/velocimetro-digital

### 5. Acceder a la aplicación
Abre tu navegador y visita:
http://localhost:8082

### 6. Para detener y eliminar el contenedor cuando ya no lo necesites
docker rm -f velocimetro-container

## Instrucciones para ejecutar localmente (sin Docker)

### 1. Clonar el repositorio
git clone https://github.com/Reishel-Tipan/WEB-AVANZADO.git
cd velocimetro-digital

### 2. Instalar dependencias
npm install

### 3. Ejecutar la aplicación en modo desarrollo
ng serve --open

La aplicación se abrirá automáticamente en tu navegador predeterminado en `http://localhost:4200`
