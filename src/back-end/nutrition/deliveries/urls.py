from django.urls import path, include
from rest_framework.routers import DefaultRouter
from deliveries.views import DeliveryViewSet
# from rest_framework.authtoken.views import obtain_auth_token
# from

router = DefaultRouter()
router.register("", DeliveryViewSet, basename="deliveries")

app_name = "deliveries"

urlpatterns = [
    path("deliveries/", include(router.urls)),
    path("deliveries/<int:pk>", include(router.urls)),
]
