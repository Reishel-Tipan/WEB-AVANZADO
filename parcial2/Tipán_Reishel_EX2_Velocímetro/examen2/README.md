# Velocímetro Digital

Aplicación web que simula un velocímetro digital desarrollado con Angular 19.


## Instrucciones de despliegue con Docker

### 1. Construir la imagen
docker build -t img-velocimetro-digital .


### 2. Ejecutar el contenedor
docker run -dit -p 8082:80 --name c-velocimetro --rm img-velocimetro-digital


### 3. Acceder a la aplicación
Abre tu navegador y visita:

http://localhost:8082



### Comandos básicos

- Ver contenedores en ejecución:
  ```
  docker ps
  ```

- Detener el contenedor:
  ```
  docker stop c-velocimetro
  ```

- Iniciar el contenedor:
  ```
  docker start c-velocimetro
  ```

- Eliminar el contenedor (si no se usó --rm):
  ```
  docker rm c-velocimetro
  ```

- Eliminar la imagen:
  ```
  docker rmi img-velocimetro-digital
  ```