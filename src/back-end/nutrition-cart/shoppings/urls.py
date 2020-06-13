from django.urls import path, include
from rest_framework.routers import DefaultRouter
from shoppings.views import ShoppingListViewSet

router = DefaultRouter()
router.register("", ShoppingListViewSet, basename="shoppings")

app_name = "shoppings"

urlpatterns = [
    path("shoppings/", include(router.urls)),
    path("shoppings/<int:pk>", include(router.urls)),
]
