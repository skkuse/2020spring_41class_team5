from django.urls import path, include

# from rest_framework.authtoken.views import obtain_auth_token

from .views import (
    registration_view,
    ObtainAuthTokenView
)

app_name = "users"

urlpatterns = [
    path("register/", registration_view, name="register"),
    path('login/', ObtainAuthTokenView.as_view(), name="login"),
    #path("login/", obtain_auth_token, name="login"),

]
