

from rest_framework import serializers

from .models import Delivery
from shoppings.serializers import ShoppingListSerializer


class DeliverySerializer(serializers.ModelSerializer):
    shoppingList = ShoppingListSerializer(many=True, read_only=True)
    #shoppingList = serializers.RelatedField(many=True, read_only=True)

    class Meta:
        model = Delivery
        fields = ("id", "user", "deliverydate",
                  "deliveryadress", "name", "img", "shoppingList")
        #read_only_fields = ('shoppingList',)


    # def create(self, validated_data):
    #     deliveries = validated_data.pop('meals')
    #     for delivery in deliveries:
    #         Delivery.objects.create(**validated_data)
    #     return delivery
