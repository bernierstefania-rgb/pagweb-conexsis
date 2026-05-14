# Proyecto Subestacion

Base de proyecto con Django en `backend/` y React + Vite en `frontend/`.

## Estructura

- `backend/`: API y configuración Django
- `frontend/`: interfaz React para el flujo de restablecimiento seguro

## Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Estado actual

La pantalla visual ya permite:

- Seleccionar el estado de la subestación
- Enviar mensajes al chat
- Ver respuestas simuladas con enfoque operativo

La lógica real de reglas se puede conectar después desde frontend o backend.

