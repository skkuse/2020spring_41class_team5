from rest_framework import serializers
from shoppings.serializers import ShoppingListSerializer
from .models import Delivery


class DeliverySerializer(serializers.ModelSerializer):
    shoppinglist = ShoppingListSerializer(many=True,read_only=True)

    class Meta:
        model = Delivery
        fields = ('delivery_id', 'user', 'deliverydate', 'delcreateddate','shoppinglist')
        read_only_fields = ('shoppinglist',)