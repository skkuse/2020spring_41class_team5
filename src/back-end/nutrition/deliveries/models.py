from django.db import models
from django.utils import timezone
from users.models import User
#from shoppings.models import ShoppingList

# Create your models here.


def upload_path(instance, filename):
    return '/'.join(['images/deliveries', filename])

class Delivery(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #shoppingList = models.ForeignKey(ShoppingList, on_delete=models.CASCADE)

    deliverydate = models.DateTimeField(default=timezone.now)
    delcreateddate = models.DateTimeField(auto_now_add=True)
    # the users address as default would be nice
    deliveryadress = models.CharField(default="None", max_length=100)
    name = models.CharField(default="None", max_length=100)
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it




