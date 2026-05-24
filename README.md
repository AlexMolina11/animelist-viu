# AnimeList VIU

Mini aplicación móvil desarrollada con React Native, Expo Router y SQLite para la actividad de la maestría.

La app permite gestionar una lista de animes favoritos con operaciones CRUD:

- Listar animes
- Crear anime
- Editar anime
- Eliminar anime
- Persistencia local con SQLite

## Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- SQLite con `expo-sqlite`
- React Navigation Tabs/Stack mediante Expo Router

## Requisitos previos

Antes de ejecutar el proyecto, instalar:

- Node.js
- npm
- Git
- Visual Studio Code
- Android Studio
- Expo Go en el teléfono Android, opcional si usarán emulador

Para verificar Node y npm:

```bash
node -v
npm -v

##Clonar el repositorio
git clone https://github.com/AlexMolina11/Actividad2_terminado.git
cd AnimeListVIU_

###Instalar dependencias
npm install

Instalar SQLite 
npx expo install expo-sqlite 

###Ejecutar la aplicación
npm run start

También puede usarse:

npx expo start

#Abrir en Android

Opción 1: Emulador Android
Abrir Android Studio.
Ir a Device Manager.
Iniciar un emulador, por ejemplo Pixel 6a API 33.
En la terminal de Expo presionar:
shift + a
Seleccionar el dispositivo disponible.

Opción 2: Expo Go
Instalar Expo Go en el teléfono.
Conectar teléfono y computadora a la misma red WiFi.

#Ejecutar:
npm run start
Escanear el código QR desde Expo Go.

#Abrir en navegador web
npm run start
