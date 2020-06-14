from rest_framework import serializers
from .models import ShoppingList


class ShoppingListSerializer(serializers.ModelSerializer):
    #img = serializers.ImageField(max_length=None, use_url=True)
    class Meta:
        model = ShoppingList
        fields = "__all__"
        