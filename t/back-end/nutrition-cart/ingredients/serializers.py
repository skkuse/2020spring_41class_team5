from rest_framework import serializers
from .models import Ingredients

class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = "__all__"
    