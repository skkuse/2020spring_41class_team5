from django.shortcuts import render

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response

from deliveries.serializers import DeliverySerializer
from deliveries.models import Delivery
# Create your views here.


class DeliveryViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()

# use queryset to get only user specific delivieres

    # def get_queryset(self):
    #user = self.request.user
    # return Delivery.objects.filter(user=user)
