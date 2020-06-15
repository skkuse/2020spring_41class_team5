from django.db import models
from django.utils import timezone
from users.models import User
from rest_framework import serializers
# Create your models here.


class Delivery(models.Model):
    delivery_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    deliverydate = models.DateTimeField(default=timezone.now)
    delcreateddate = models.DateTimeField(auto_now_add=True)
    # the users address as default would be nice
    deliveryadress = models.CharField(default="None", max_length=100)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
