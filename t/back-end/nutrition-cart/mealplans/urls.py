from django.urls import path, include
from rest_framework.routers import DefaultRouter
from mealplans.views import MealPlanViewSet, MealPlanVS
from mealplans import views

router = DefaultRouter()
router.register("", MealPlanViewSet, basename="mealplans")

app_name = "mealplans"

urlpatterns = [
    path("mealplans/", include(router.urls)),
    path("mealplans/<int:pk>", include(router.urls)),
    path('mealplans/<int:pk>/<instruction>/', views.change_mealplean, name="change-course"),
    path('recoms/', views.MealPlanVS.as_view(), name="recoms"),
]

