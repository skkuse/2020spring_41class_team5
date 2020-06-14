from rest_framework import serializers
from .models import Meals

class MealsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meals
        fields = "__all__"
    