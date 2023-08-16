# cree mi entorno virtual
python -m venv entorno_django
# Activo mi entorno virtual:
entorno_django/Scripts/activate
# instalo django
pip install django
# creo mi proyecto:
django-admin startproject django_read_api .
# creo mi aplicacion:
python manage.py startapp tasks
# ejecuto las migraciones
python manage.py migrate
# instalamos la libreria djangorestframework
pip install djangorestframework
# para comunicar nuestro backend y frontend instalamos lo siguiente:
pip install django-cors-headers
# En settings.py en MIDDLEWARE = [] agregamos lo siguiente despues de la segunda linea:
'corsheaders.middleware.CorsMiddleware',
# al final de settings.py agregamos esto
CORS_ALLOWED_ORIGINS = []
# cree mi superusuario
python manage.py createsuperuser
# añadimos un modulo que documente nuestra aplicacion
pip install coreapi
# creamos nuestro frontend
npm create vite
elegimos como nombre de nuestro proyecto client, luego elegimos React y por ultimo javascript
cd client
npm install
npm run dev
# instalamos el modulo react-router-dom para tener multiples paginas 
# instalamos el modulo react-hot-toast para recibir mensajes cuando eliminemos algo
# instalamos el modulo axios que nos sirve para hacer peticiones
# instalamos el modulo react-hook-form que nos permitira validar el input que creemos en el frontend
npm i react-router-dom react-hot-toast axios react-hook-form
# modificamos los archivos App.jsx , App.css y el index.css
# en src creamos las carpetas api ,components y pages
# en la carpeta pages creamos los archivos TasksPage.jsx y TaskFormPage.jsx 
# creamos nuestras rutas en App.jsx
# en la carpeta components creo el archivo Navigation.jsx

