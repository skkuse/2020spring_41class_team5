from rest_framework import serializers
from shoppings.serializers import ShoppingListSerializer
from .models import Delivery


class DeliverySerializer(serializers.ModelSerializer):
    shoppinglist = ShoppingListSerializer(many=True) #read_only=True

    class Meta:
        model = Delivery
        fields = ('delivery_id', 'user', 'deliverydate', 'delcreateddate','shoppinglist')
        # read_only_fields = ('',)

    # def create(self, validated_data):
    #     ingredient = validated_data.pop('shoppinglist')
    #     delivery = Delivery.objects.create(**validated_data)
    #     for track_data in tracks_data:
    #         Delivery.objects.create(album=album, **track_data)
    #     return album
