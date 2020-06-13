from django.shortcuts import render
from django.db.models import Q

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response

from shoppings.serializers import ShoppingListSerializer
from shoppings.models import ShoppingList

from users.models import User
from users.managers import UserManager

objects = UserManager()


class ShoppingListViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    serializer_class = ShoppingListSerializer
    queryset = ShoppingList.objects.all()

# use queryset to get only user specific delivieres
    # def get_queryset(self):
    #user = self.request.user
    #my_deliveries = Q(user=user)
    # return MealPlan.objects.filter(my_deliveries)
