from rest_framework import serializers
from .models import MealPlans_gain
from rest_framework.response import Response


# class MealPlan_gainListSerializer(serializers.ListSerializer):
#     def create(self, validated_data):
#         mealPlan_gains = [MealPlan_gain(**item) for item in validated_data]
#         return MealPlan_gain.objects.bulk_create(mealPlan_gains)


class MealPlans_gainSerializer(serializers.ModelSerializer):

    class Meta:
        model = MealPlans_gain
        fields = "__all__"

# [
#     {"mealType": "blub", "img": null, "name": "blu1"},
#     {"mealType": "blubblub", "img": null, "name": "blublub"}
# ]
