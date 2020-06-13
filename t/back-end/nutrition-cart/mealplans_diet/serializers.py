from rest_framework import serializers
from .models import MealPlans_diet
from rest_framework.response import Response


# class MealPlan_dietListSerializer(serializers.ListSerializer):
#     def create(self, validated_data):
#         mealPlan_diets = [MealPlan_diet(**item) for item in validated_data]
#         return MealPlan_diet.objects.bulk_create(mealPlan_diets)


class MealPlans_dietSerializer(serializers.ModelSerializer):

    class Meta:
        model = MealPlans_diet
        fields = "__all__"

# [
#     {"mealType": "blub", "img": null, "name": "blu1"},
#     {"mealType": "blubblub", "img": null, "name": "blublub"}
# ]
