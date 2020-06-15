from rest_framework import serializers
from .models import ShoppingList
from ingredients.serializers import IngredientsSerializer


class ShoppingListSerializer(serializers.ModelSerializer):
    #img = serializers.ImageField(max_length=None, use_url=True)
    ingredients = IngredientsSerializer(many=True, read_only=True)  # read_only=True

    class Meta:
        model = ShoppingList
        fields = ('shoppinglist_id', 'name', 'img',
                  'price', 'state', 'ingredients', 'delivery','user')
