# ProBook - Cliente Angular

Frontend del proyecto ProBook (hospedaje digital). Angular 18 + Angular Material.

## Requisitos

- Node.js 18+ y npm (o pnpm/yarn)

## Instalación y ejecución

```bash
cd client
npm install
npm start
```

La app se abre en `http://localhost:4200`.

## Estructura según el PDF

- **Login** (`/login`): Inicio de sesión. Por ahora redirige a `/main` sin validar contra API.
- **Registro** (`/register`): Placeholder; enlazado desde el login.
- **Main** (`/main`): Layout con **sidebar** y **área de contenido** (partial view).
  - **Dashboard** (`/main/dashboard`)
  - **Habitaciones** (`/main/habitaciones`) – Gerente
  - **Huéspedes** (`/main/huespedes`) – Gerente
  - **Reportes** (`/main/reportes`) – Gerente
  - **Reservar** (`/main/reservar`) – Huésped

El sidebar muestra todas las opciones; más adelante se puede filtrar por rol (Manager / Invitado) cuando exista autenticación real.

## Build producción

```bash
npm run build
```

Salida en `dist/client`.
