# Etapa de construcción
FROM node:20-alpine AS build
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build -- --configuration=production

# Etapa de producción
FROM nginx:alpine

# Copiar la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /usr/src/app/dist/system/browser /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
