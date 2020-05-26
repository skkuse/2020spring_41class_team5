from rest_framework import serializers

from users.models import User

from .managers import UserManager

objects = UserManager()


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["email", "password"]


class UserPropertiesSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['pk', 'email', ]


class ChangePasswordSerializer(serializers.Serializer):

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    confirm_new_password = serializers.CharField(required=True)
