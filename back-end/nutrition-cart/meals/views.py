from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.db.models import Q

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import parsers
from rest_framework.response import Response
from rest_framework.decorators import action

from meals.serializers import MealsSerializer
from meals.models import Meals
from users.models import User
from users.managers import UserManager

objects = UserManager()

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True
        return super().get_serializer(*args, **kwargs)

class MealsViewSet(CreateListMixin, viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Meals.objects.all()
    model = Meals
    serializer_class = MealsSerializer
    
# use queryset to get only user specific delivieres
    # def get_queryset(self):
    #user = self.request.user
    #my_deliveries = Q(user=user)
    # return MealPlan.objects.filter(my_deliveries)
