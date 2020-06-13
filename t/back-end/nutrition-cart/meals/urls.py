from django.urls import path, include
from rest_framework.routers import DefaultRouter
from meals.views import MealsViewSet

router = DefaultRouter()
router.register("", MealsViewSet, basename="meals")

app_name = "meals"

urlpatterns = [
    path("meals/", include(router.urls)),
    path("meals/<int:pk>", include(router.urls)),
]

