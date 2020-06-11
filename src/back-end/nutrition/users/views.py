from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView

from django.contrib.auth import authenticate

from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .serializers import RegistrationSerializer, UserPropertiesSerializer, ChangePasswordSerializer
from .models import User
from rest_framework.authtoken.models import Token

from .managers import UserManager
from django.contrib.auth import get_user_model

objects = UserManager()


@api_view(["POST", ])
@permission_classes([])
@authentication_classes([])
def registration_view(request):
    User = get_user_model()
    if request.method == "POST":
        data = {}
        email = request.data.get('email', '0').lower()
        if validate_email(email) != None:
            data['error_message'] = 'That email is already in use.'
            data['response'] = 'Error'
            return Response(data)

        serializer = RegistrationSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            user = User.objects.get(email=user.email)
            token = Token.objects.get(user=user).key
            data["response"] = "successfully registered."
            data["email"] = user.email
            data["token"] = token
        else:
            data = serializer.errors
        return Response(data)



def validate_email(email):
    user = None
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return None
    if user != None:
        return email


@api_view(['GET', ])
@permission_classes((IsAuthenticated, ))
def account_properties_view(request):
    try:
        user = request.user
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserPropertiesSerializer(user)
        return Response(serializer.data)


@api_view(['GET', ])
@permission_classes([])
@authentication_classes([])
def does_account_exist_view(request):

    if request.method == 'GET':
        email = request.GET['email'].lower()
        data = {}
        try:
            account = User.objects.get(email=email)
            data['response'] = email
        except User.DoesNotExist:
            data['response'] = "Account does not exist"
        return Response(data)


# LOGIN
# Response: https://<front-end>/8e1bde81b3be342853ddfcc45ec0df8a
# URL: http://127.0.0.1:8000/users/login
class ObtainAuthTokenView(APIView):

    authentication_classes = []
    permission_classes = []
    User = get_user_model()

    def post(self, request):
        context = {}

        email = request.POST.get('email').lower()
        password = request.POST.get('password').lower()
        user = User.objects.get(email=email, password=password)
       # user = authenticate(email=email, password=password)  - does not work (return null for unkown reason)
        if user:
            try:
                token = Token.objects.get(user=user)
            except Token.DoesNotExist:
                token = Token.objects.create(user=user)
            context['response'] = 'Successfully authenticated.'
            context['pk'] = user.pk
            context['email'] = email.lower()
            context['token'] = token.key
        else:
            context['response'] = 'Error'
            context['error_message'] = 'Invalid credentials'
            context['email'] = email.lower()
            context['password'] = request.POST.get('password')
            context['user'] = authenticate(email=email, password=password)

        return Response(context)
