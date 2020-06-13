from django.shortcuts import render
from django.db.models import Q

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response

from deliveries.serializers import DeliverySerializer
from deliveries.models import Delivery
# Create your views here.

from users.models import User
from users.managers import UserManager

objects = UserManager()


class DeliveryViewSet(viewsets.ModelViewSet):
    authentication_classes = []  # TokenAuthentication
    permission_classes = []  # IsAuthenticated
    queryset = Delivery.objects.all()
    serializer_class = DeliverySerializer

# use queryset to get only user specific delivieres
    # def get_queryset(self):
    #     user = self.request.user
    #     my_deliveries = Q(user=user)
    #     return Delivery.objects.filter(my_deliveries)

