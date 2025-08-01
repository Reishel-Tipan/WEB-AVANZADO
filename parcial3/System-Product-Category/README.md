# Sistema de Gestión de Productos y Categorías

Este es un sistema completo para la gestión de productos y categorías, desarrollado con Angular 19 para el frontend, Spring Boot para el backend y MySQL como base de datos. Todo el sistema puede ser desplegado fácilmente usando Docker Compose.

## Características

- **Frontend**: Aplicación Angular 19 con diseño responsivo
- **Backend**: 
  - Servicio de Productos (Spring Boot)
  - Servicio de Categorías (Spring Boot)
- **Base de datos**: MySQL 8.0
- **Despliegue**: Configuración completa con Docker Compose

## Requisitos previos

- Docker 20.10.0 o superior
- Docker Compose 1.29.0 o superior
- Git (opcional, para clonar el repositorio)

## Instrucciones de despliegue

### 1. Clonar el repositorio (si no lo has hecho ya)

```bash
git clone <URL_DEL_REPOSITORIO>
cd System-Product-Category
```

### 2. Iniciar la aplicación con Docker Compose

Ejecuta el siguiente comando en la raíz del proyecto:

```bash
docker-compose up --build -d
```

Este comando hará lo siguiente:
1. Construirá las imágenes de Docker necesarias
2. Iniciará los contenedores en segundo plano
3. Configurará la red entre los contenedores
4. Inicializará la base de datos MySQL

### 3. Verificar que los servicios estén en ejecución

Puedes verificar el estado de los contenedores con:

```bash
docker-compose ps
```

Deberías ver los siguientes servicios en estado "Up":
- mysql-db
- categoria-service
- products-service
- frontend-app

### 4. Acceder a la aplicación

Una vez que todos los servicios estén en ejecución, puedes acceder a la aplicación en:

- **Frontend**: http://localhost:4200
- **API de Productos**: http://localhost:8081/api/products
- **API de Categorías**: http://localhost:8082/api/categorias

## Estructura del proyecto

```
System-Product-Category/
├── backend/
│   ├── categoria/         # Servicio de Categorías (Spring Boot)
│   └── products/          # Servicio de Productos (Spring Boot)
├── frontend/
│   └── system/            # Aplicación Angular 19
├── docker-compose.yml      # Configuración de Docker Compose
└── README.md              # Este archivo
```

## Variables de entorno

Las siguientes variables de entorno pueden ser modificadas en el archivo `docker-compose.yml` según sea necesario:

- **MySQL**:
  - `MYSQL_ROOT_PASSWORD`: Contraseña del usuario root de MySQL
  - `MYSQL_DATABASE`: Nombre de la base de datos
  - `MYSQL_USER`: Usuario de la base de datos
  - `MYSQL_PASSWORD`: Contraseña del usuario de la base de datos

- **Servicios Spring Boot**:
  - `DB_HOST`: Dirección del servidor de base de datos
  - `DB_PORT`: Puerto de la base de datos
  - `DB_NAME`: Nombre de la base de datos
  - `DB_USER`: Usuario de la base de datos
  - `DB_PASSWORD`: Contraseña de la base de datos

## Comandos útiles

### Detener los contenedores
```bash
docker-compose down
```

### Ver logs de los contenedores
```bash
docker-compose logs -f
```

### Reconstruir y reiniciar un servicio específico
```bash
docker-compose up -d --build <nombre_del_servicio>
```

## Solución de problemas

### Si los servicios no se inician correctamente
1. Verifica que los puertos no estén siendo utilizados por otras aplicaciones
2. Revisa los logs del servicio con problemas: `docker-compose logs <nombre_del_servicio>`
3. Asegúrate de que Docker tenga suficientes recursos asignados

### Si la base de datos no se inicializa correctamente
1. Verifica que las credenciales en el archivo `docker-compose.yml` coincidan con las de los servicios
2. Intenta eliminar los volúmenes y volver a iniciar: `docker-compose down -v` y luego `docker-compose up -d`

## Licencia

Este proyecto está bajo la Licencia MIT.
