# Instrucciones: 

## Pre-requisitos: 

- Es necesario tener Node.js y npm instalado.
# Para instalar Node.js en Windows:
- Dirigirse a la página oficial: https://nodejs.org/es/download/  y descargar su instalador correspondiente con su sistema operativo. 
En Windows, simplemente abrir el instalador y seguir sus pasos: ** es altamente recomendable activar la opción Add to PATH en la sección de Custom setup del instalador ** para poder tener acceso a los comandos en la terminal de windows. 

# Para instalar Node.js en Linux (Ubuntu 20.04): 
- https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

# Ejecutando la solución en Windows: 
- Para simplificar la ejecución, realicé dos scripts de powershell. Los archivos son **setup-client.ps1** y **setup-server.ps1.** Simplemente abrir primero setup-server.ps1 y luego setup-client.ps1

# **¿Que hacen los scripts?**
- Instalan las dependencias
- Abren el servidor cliente y el backend
- Prepara la estructura de la base de datos (en el caso de setup-server)
- Inserta algunos datos de prueba (en el caso de setup-server)
- Abren el navegador
# Ejecutando la solución en Linux:
Necesitamos abrir dos terminales. En la primer terminal vamos abrir la carpeta server y a ejecutar los siguientes comandos: 

## Instalamos dependencias
```bash
npm install
```
## Creamos la estructura de la base de datos
```bash
npm run migrate
```
## Insertamos datos de prueba
```bash
npm run seed
```
## Corremos el servidor
```bash
npm run start
```
Luego, en la otra terminal abrimos la carpeta client y ejecutamos los siguientes comandos:

## Instalamos dependencias
```bash
npm install
```
## Compilamos el proyecto
```bash
npm run build
```
## Ejecutamos el servidor de pruebas de la versión compilada
```bash
npm run preview
```
Luego de esto, nos dirigimos al navegador y vamos a esta dirección: http://127.0.0.1:4173/



# Troubleshooting: 
- En caso de no abrirse automáticamente el navegador luego de abrir **setup-client.ps1** abrir el navegador manualmente y pegar esta URL: http://127.0.0.1:4173/

