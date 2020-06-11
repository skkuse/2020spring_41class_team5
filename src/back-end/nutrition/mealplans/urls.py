from django.urls import path, include
from rest_framework.routers import DefaultRouter
from mealplans.views import MealPlanViewSet

router = DefaultRouter()
router.register("", MealPlanViewSet, basename="mealplans")

# router.register(r"/mealplans/(?P < parent_id > .+)", MealPlanViewSet)
# router.register(r'/(?P<id>.+)', MealPlanViewSet)

app_name = "mealplans"

urlpatterns = [
    path("mealplans/", include(router.urls)),
    path("mealplans/<int:pk>", include(router.urls)),
]
