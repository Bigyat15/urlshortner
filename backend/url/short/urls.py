from django.urls import path
from . import views
urlpatterns = [
    path("create/shorturl/",views.create_short_url,name="create_short_url"),
]
