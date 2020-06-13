from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ingredients.views import IngredientsViewSet

router = DefaultRouter()
router.register("", IngredientsViewSet, basename="ingredients")

app_name = "ingredients"

urlpatterns = [
    path("ingredients/", include(router.urls)),
    path("ingredients/<int:pk>", include(router.urls)),
]

