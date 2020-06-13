from django.core.files.base import ContentFile
import base64
from rest_framework import serializers
from .models import ShoppingList


class ShoppingListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShoppingList
        fields = "__all__"  # ('id', 'name', 'price', 'img',)

