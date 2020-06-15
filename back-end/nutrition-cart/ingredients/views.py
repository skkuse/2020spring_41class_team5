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

from ingredients.serializers import IngredientsSerializer
from ingredients.models import Ingredients
from users.models import User
from users.managers import UserManager

objects = UserManager()

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True
        return super().get_serializer(*args, **kwargs)

class IngredientsViewSet(CreateListMixin, viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Ingredients.objects.all()
    model = Ingredients
    serializer_class = IngredientsSerializer
    # use queryset to get only user specific delivieres

    def get_queryset(self):
      user = self.request.user
      user_ingreds = Q(user=user)
      return Ingredients.objects.filter(user_ingreds)


