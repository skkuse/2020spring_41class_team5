from django.shortcuts import render

# Create your views here.
from django.db.models import Q

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response

from mealplans.serializers import MealPlanSerializer
from mealplans.models import MealPlan
# Create your views here.

from users.models import User
from users.managers import UserManager
from rest_framework.parsers import JSONParser, MultiPartParser

objects = UserManager()


class MealPlanViewSet(viewsets.ModelViewSet):
    authentication_classes = []  # TokenAuthentication
    permission_classes = []  # IsAuthenticated
    serializer_class = MealPlanSerializer
    parser_classes = (MultiPartParser, JSONParser)
    queryset = MealPlan.objects.all()

    # use queryset to get only user specific delivieres
    # def get_queryset(self):
    #   my_id = self.request.query_params.get('id')
    #   #my_id = int(parent, base=0)
    #   #print(my_id)
    #   return MealPlan.objects.filter(id=my_id)
