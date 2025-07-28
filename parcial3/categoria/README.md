# API de Gestión de Categorías

API REST para administrar categorías con Spring Boot, MySQL y Docker.

## Configuración Inicial

1. Crear la red Docker:
   ```bash
   docker network create test-network
   ```

2. Iniciar el contenedor de MySQL:
   ```bash
   docker run -d --name test-db \
     --network test-network \
     -e MYSQL_ROOT_PASSWORD=admin123 \
     -e MYSQL_DATABASE=test \
     -p 3307:3306 \
     mysql
   ```

## Ejecutar la API con Docker Hub

```bash
docker run -dit -p 8082:8004 \
  --name c-app-categories \
  --network test-network \
  -e DB_HOST=test-db \
  -e DB_PORT=3306 \
  -e PORT=8004 \
  -e DB_NAME=test \
  reirei05/categorie-tipan-reishel:v1
```

## Probar los Endpoints

### 1. Crear Categoría (POST)
```bash
curl -X POST http://localhost:8082/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name": "Electrónicos", "description": "Dispositivos electrónicos"}'
```

### 2. Listar Categorías (GET)
```bash
curl http://localhost:8082/api/categories
```

### 3. Obtener Categoría por ID (GET)
```bash
# Reemplaza {id} con un ID existente
curl http://localhost:8082/api/categories/1
```

### 4. Actualizar Categoría (PUT)
```bash
# Reemplaza {id} con un ID existente
curl -X PUT http://localhost:8082/api/categories/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Tecnología", "description": "Productos tecnológicos"}'
```

### 5. Eliminar Categoría (DELETE)
```bash
# Reemplaza {id} con un ID existente
curl -X DELETE http://localhost:8082/api/categories/1
```

## Requisitos
- Red Docker: `test-network`
- Servidor MySQL en `test-db:3306`
- Puerto 8082 disponible
