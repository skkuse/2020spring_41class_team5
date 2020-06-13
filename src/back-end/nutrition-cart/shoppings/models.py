from django.db import models


from django.utils import timezone
from django.core.files.storage import FileSystemStorage
# from users.models import User
from deliveries.models import Delivery


def upload_path(instance, filename):
    return '/'.join(['images', filename])


class ShoppingList(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(default="None", max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    state =  models.BooleanField(default=False)
    # default=1
    delivery = models.ForeignKey(Delivery, related_name='shoppingList', on_delete=models.CASCADE)


    # img = models.Image
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
