from django.urls import path, include
from rest_framework.routers import DefaultRouter
from userinfo.views import UserinfoViewSet

router = DefaultRouter()
router.register("", UserinfoViewSet, basename="userinfo")

app_name = "userinfo"

urlpatterns = [
    path("userinfo/", include(router.urls)),
    path("userinfo/<int:pk>", include(router.urls)),
]
