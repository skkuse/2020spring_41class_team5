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
from django.shortcuts import redirect, render
from rest_framework.decorators import authentication_classes, api_view, permission_classes
import logging

objects = UserManager()


# class CreateListMixin:
#     """Allows bulk creation of a resource."""

#     def get_serializer(self, *args, **kwargs):
#         if isinstance(kwargs.get('data', {}), list):
#             kwargs['many'] = True

#         return super().get_serializer(*args, **kwargs)


class MealPlanViewSet(viewsets.ModelViewSet):
    authentication_classes = []  # TokenAuthentication
    permission_classes = []  # IsAuthenticated
    #parser_classes = (MultiPartParser, JSONParser)
    queryset = MealPlan.objects.all()
    model = MealPlan
    serializer_class = MealPlanSerializer  # MealPlanSerializer

logger = logging.getLogger(__name__)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def change_mealplean(request, pk, instruction):
      meal = MealPlan.objects.get(id=pk)
      user = request.user
      logger.error(user)
      #Quser = Q(user=user)
      if instruction == 'subscribe':
        meal.users.add(user)
        #meal.subscribe(user)
      if instruction == 'unsubscribe':
         meal.users.remove(user)
        #MealPlan.unsubscribe(self.request.user, mealplan)
      return redirect("/mealplans")


    # def get_serializer(self, *args, **kwargs):
    #         if self.request.method.lower() == 'post':
    #             data = kwargs.get('data')
    #             kwargs['many'] = isinstance(data, list)
    #         return super(MealPlanViewSet, self).get_serializer(*args, **kwargs)

    # use queryset to get only user specific delivieres
    # def get_queryset(self):
    #   my_id = self.request.query_params.get('id')
    #   #my_id = int(parent, base=0)
    #   #print(my_id)
    #   return MealPlan.objects.filter(id=my_id)
