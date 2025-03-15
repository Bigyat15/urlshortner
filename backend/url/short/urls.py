from django.urls import path
from . import views
urlpatterns = [
    path("get/urldetails/",views.get_url_detail,name="get_url_details"),
    path("create/shorturl/",views.create_short_url,name="create_short_url"),
    path("<str:short_code>/",views.redirect_short_url,name="redirect_short_url"),
]
