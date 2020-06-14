from rest_framework import mixins, generics
import logging
from django.db.models import Q
from django.shortcuts import redirect, render
from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.decorators import authentication_classes, api_view, permission_classes

# Own Models
from users.models import User
from users.managers import UserManager
from mealplans.models import MealPlan
from mealplans.serializers import MealPlanSerializer


objects = UserManager()


# class CreateListMixin:
# #     """Allows bulk creation of a resource."""
#     def get_serializer(self, *args, **kwargs):
#         if isinstance(kwargs.get('data', {}), list):
#             kwargs['many'] = True
#         return super().get_serializer(*args, **kwargs)

class MealPlanViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]  # TokenAuthentication
    permission_classes = [IsAuthenticated]  #
    #parser_classes = (MultiPartParser, JSONParser)
    #queryset = MealPlan.objects.all()
    model = MealPlan
    serializer_class = MealPlanSerializer  # MealPlanSerializer

    #use queryset to get only user specific mealplans
    def get_queryset(self):
      user = self.request.user
      return MealPlan.objects.filter(users=user)

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


@permission_classes([])
@authentication_classes([])
class MealPlanVS(ListAPIView):
  queryset = MealPlan.objects.all()
  serializer_class = MealPlanSerializer
