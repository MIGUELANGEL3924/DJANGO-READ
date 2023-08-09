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
