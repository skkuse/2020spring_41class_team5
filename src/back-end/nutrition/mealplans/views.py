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

objects = UserManager()

class CreateListMixn:
    """Allows bulk creation of a resource"""

    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many']=True

        return super().get_serializer(*args, **kwargs)

class MealPlanViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    serializer_class = MealPlanSerializer
    model = MealPlan
    queryset = MealPlan.objects.all()

# use queryset to get only user specific delivieres
    # def get_queryset(self):
    #user = self.request.user
    #my_deliveries = Q(user=user)
    # return MealPlan.objects.filter(my_deliveries)
