from rest_framework import serializers
from .models import MealPlan
from rest_framework.response import Response


# class MealPlanListSerializer(serializers.ListSerializer):
#     def create(self, validated_data):
#         mealplans = [MealPlan(**item) for item in validated_data]
#         return MealPlan.objects.bulk_create(mealplans)


class MealPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = MealPlan
        fields = "__all__"

# [
#     {"mealType": "blub", "img": null, "name": "blu1"},
#     {"mealType": "blubblub", "img": null, "name": "blublub"}
# ]
