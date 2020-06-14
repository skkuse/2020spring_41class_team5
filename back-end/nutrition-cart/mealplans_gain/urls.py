from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MealPlans_gainViewSet

router = DefaultRouter()
router.register("", MealPlans_gainViewSet, basename="mealplans_gains")

# router.register(r"/mealplans_gains/(?P < parent_id > .+)", Mealplans_gainViewSet)
# router.register(r'/(?P<id>.+)', Mealplans_gainViewSet)

app_name = "mealplans_gains"

urlpatterns = [
    path("mealplans_gains/", include(router.urls)),
    path("mealplans_gains/<int:pk>", include(router.urls)),
]
