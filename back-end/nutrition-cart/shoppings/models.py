from django.db import models
from django.contrib.postgres.fields import ArrayField

from django.db import models
from django.utils import timezone
# from users.models import User
from deliveries.models import Delivery

def upload_path(instance, filename):
    return '/'.join(['images', filename])

class ShoppingList(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(default="None", max_length=100)
    img = models.CharField(default="None", max_length=100)
    #img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    price = models.DecimalField(decimal_places=5, max_digits=10)
    state = models.BooleanField(default = False)
    delivery = models.ForeignKey(Delivery, related_name='shoppinglist' ,on_delete=models.CASCADE)
    #img2 = models.ImageField(blank= True, null=True)
    #list = ArrayField(models.CharField(max_length=10), default=list)
    # img = models.Image
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
