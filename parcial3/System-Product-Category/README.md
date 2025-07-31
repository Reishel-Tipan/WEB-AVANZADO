# 🚀 Sistema de Gestión de Productos y Categorías

Sistema completo para la gestión de productos y categorías, desarrollado con Angular 19 para el frontend, Spring Boot para los microservicios backend y MySQL como base de datos. Todo el sistema está contenerizado con Docker para facilitar su despliegue.

## 🚀 Inicio Rápido

**¡Solo necesitas un comando para tener todo funcionando!**

```bash
docker-compose up -d
```

Este comando hará todo automáticamente:
- Descargará las imágenes necesarias
- Creará y configurará la base de datos MySQL
- Iniciará los microservicios de Spring Boot
- Desplegará la aplicación Angular

## 🌐 Acceso a la Aplicación

Una vez que todos los servicios estén en ejecución (puede tardar 1-2 minutos en la primera ejecución), accede a:

- **Aplicación Web**: [http://localhost:4200](http://localhost:4200)
- **API Productos**: [http://localhost:8081/api/products](http://localhost:8081/api/products)
- **API Categorías**: [http://localhost:8082/api/categories](http://localhost:8082/api/categories)

## 🔑 Credenciales de la Base de Datos (MySQL)

- **Host**: localhost
- **Puerto**: 3307
- **Usuario**: root
- **Contraseña**: admin123
- **Base de datos**: productdb

## 🛠️ Características Técnicas

- **Frontend**: 
  - Angular 19
  - Diseño responsivo y moderno
  - Interfaz intuitiva

- **Backend**:
  - Spring Boot 3.x
  - Arquitectura de microservicios
  - API RESTful

- **Base de Datos**:
  - MySQL 8.0
  - Configuración automática
  - Datos persistentes

## 📂 Estructura del Proyecto

```
.
├── backend/
│   ├── categoria/          # Microservicio de Categorías
│   └── products/           # Microservicio de Productos
├── frontend/              
│   └── system/             # Aplicación Angular
├── docker-compose.yml      # Configuración de Docker
└── README.md              
```

## 🔄 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `docker-compose up -d` | Inicia todos los servicios |
| `docker-compose down` | Detiene y elimina los contenedores |
| `docker-compose logs -f` | Muestra los logs en tiempo real |
| `docker-compose ps` | Verifica el estado de los contenedores |
| `docker-compose up -d --build` | Reconstruye las imágenes y reinicia |

## ⚙️ Configuración Avanzada

Toda la configuración está lista para funcionar sin cambios. Si necesitas personalizar algo, edita el archivo `docker-compose.yml`.

## 📝 Notas Importantes

- La primera ejecución puede tardar varios minutos mientras se descargan las imágenes.
- Los datos de la base de datos persisten entre reinicios gracias a volúmenes de Docker.
- El puerto 3307 se usa para MySQL para evitar conflictos con otras instalaciones.

- **Backend (ambos servicios)**:
  - `SPRING_DATASOURCE_URL`: URL de conexión a la base de datos
  - `SPRING_DATASOURCE_USERNAME`: Usuario de la base de datos
  - `SPRING_DATASOURCE_PASSWORD`: Contraseña de la base de datos

## Solución de problemas

1. **Problemas de puertos**:
   - Asegúrate de que los puertos 4200 (frontend), 8081 (productos), 8082 (categorías) y 3307 (MySQL) no estén siendo utilizados por otras aplicaciones.

2. **Problemas de conexión entre servicios**:
   - Verifica que todos los contenedores estén en la misma red de Docker (`docker network ls`).
   - Revisa los logs de los contenedores para identificar errores específicos.

3. **Problemas de permisos**:
   - En algunos sistemas, puede ser necesario ejecutar Docker con privilegios de administrador.

4. **Reiniciar desde cero**:
   ```bash
   docker-compose down -v  # Elimina volúmenes también
   docker-compose up -d
   ```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
