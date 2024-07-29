# CLIENT_LEXART_LABS_TEST

CLIENT DEVELOPMENT BY JEAN GARZON


# Cliente con Next.js y TailwindCSS

Este cliente está desarrollado con el framework Next.js que trabaja con React, y utiliza TailwindCSS para los estilos, entre otras librerías para iconos.

## Configuración del Entorno de Desarrollo

### Instalación de Dependencias

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y define las siguientes variables de entorno:

```env
NEXT_PUBLIC_HOST_DEV=http://localhost:3001 # Este host apunta a nuestro REST API para consumir los endpoints
NEXT_PUBLIC_ENV_DEV=true # Establecemos el modo desarrollo en true
```

### Ejecución del Servidor

Después de establecer las variables, puedes ejecutar el siguiente comando para correr el servidor:

```bash
npm run dev
```

El servidor se ejecutará en [http://localhost:3000/](http://localhost:3000/).

## Despliegue

Este proyecto se encuentra desplegado en Vercel en la siguiente dirección:

- [https://client-lexart-labs.vercel.app](https://client-lexart-labs.vercel.app)

### Usuario de Prueba en Producción

Para probar la aplicación en producción, puedes utilizar el siguiente usuario:

- **Email**: prueba@test.com
- **Password**: 12345678

## Notas Adicionales

De acuerdo al tiempo disponible, ya que trabajo fines de semana también, quedaron pendientes diferentes módulos por desarrollar. Actualmente, se puede:

- Registrar un usuario
- Iniciar sesión
- Obtener la lista de productos
- Navegar con la barra de navegación por los diferentes módulos, los cuales muestran una pantalla de "página en construcción"
- Cerrar sesión

Sin embargo, todas las funcionalidades requeridas están listas desde el API REST para ser consumidas y configuradas en el cliente.

Si tienes algún problema o pregunta sobre la configuración o el uso del proyecto, no dudes en abrir un issue o contactarnos.

