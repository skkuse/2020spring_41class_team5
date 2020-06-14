from rest_framework.parsers import JSONParser, MultiPartParser
from django.shortcuts import render
from django.db.models import Q

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, MultiPartParser, FileUploadParser

from userinfo.serializers import UserInfoSerializer
from userinfo.models import UserInfo

from users.models import User
from users.managers import UserManager

objects = UserManager()


class UserinfoViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    serializer_class = UserInfoSerializer
    queryset = UserInfo.objects.all()
    parser_classes = (MultiPartParser, JSONParser)