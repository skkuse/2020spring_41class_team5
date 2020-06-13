from django.urls import path, include
from rest_framework.routers import DefaultRouter
from products.views import ProductsViewSet

router = DefaultRouter()
router.register("", ProductsViewSet, basename="products")

app_name = "products"

urlpatterns = [
    path("products/", include(router.urls)),
    path("products/<int:pk>", include(router.urls)),
]

