from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MealPlans_dietViewSet

router = DefaultRouter()
router.register("", MealPlans_dietViewSet, basename="mealplans_diets")

# router.register(r"/mealplans_diets/(?P < parent_id > .+)", Mealplans_dietViewSet)
# router.register(r'/(?P<id>.+)', Mealplans_dietViewSet)

app_name = "mealplans_diets"

urlpatterns = [
    path("mealplans_diets/", include(router.urls)),
    path("mealplans_diets/<int:pk>", include(router.urls)),
]
