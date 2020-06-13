from django.core.files.base import ContentFile
import base64
from rest_framework import serializers
from .models import UserInfo

class UserInfoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserInfo
        fields = "__all__"