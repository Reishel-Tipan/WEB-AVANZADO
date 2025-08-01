# Sistema de Gestión de Productos y Categorías

Sistema completo para la gestión de productos y categorías con Angular 19 (frontend), Spring Boot (backend) y MySQL. Despliegue simplificado con Docker Compose.

## 🚀 Instalación Rápida

### 1. Clonar el repositorio

```bash
git clone https://github.com/Reishel-Tipan/WEB-AVANZADO.git
cd WEB-AVANZADO/parcial3/System-Product-Category
```

Si ya tienes el repositorio clonado, simplemente navega a la carpeta del proyecto:

```bash
cd ruta/a/tu/proyecto/WEB-AVANZADO/parcial3/System-Product-Category
```

### 2. Iniciar la aplicación

```bash
docker-compose up --build -d
```

## 🌐 Acceso a la aplicación

- **Frontend (Angular)**: http://localhost:4200
- **API Productos**: http://localhost:8081/api/products
- **API Categorías**: http://localhost:8082/api/categories
- **Base de datos MySQL**:
  - Puerto: 3307
  - Usuario: root
  - Contraseña: admin123
  - Base de datos: productdb / categorydb

## 🛠️ Comandos útiles

- **Ver logs de los contenedores**: `docker-compose logs -f`
- **Detener la aplicación**: `docker-compose down`
- **Reiniciar un servicio**: `docker-compose restart nombre-servicio`

## 📦 Estructura del proyecto

```
System-Product-Category/
├── backend/             # Servicios backend (Spring Boot)
│   ├── products/        # Servicio de productos
│   └── categoria/       # Servicio de categorías
├── frontend/            # Aplicación Angular
└── docker-compose.yml   # Configuración de Docker Compose
```

## 🔍 Características

- **Frontend**: Angular 19 con diseño responsivo
- **Backend**: Microservicios Spring Boot
- **Base de datos**: MySQL 8.0
- **Despliegue**: Configuración optimizada con Docker Compose

## 📝 Notas adicionales

- La aplicación está configurada para mostrar primero la sección de Categorías
- Los cambios en la base de datos persisten gracias a volúmenes de Docker
- Para reiniciar completamente la base de datos, usa: `docker-compose down -v`

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
