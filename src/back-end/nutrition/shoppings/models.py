from django.db import models


from django.db import models
from django.utils import timezone
# from users.models import User


class ShoppingList(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(default="None", max_length=100)
    img = models.CharField(max_length=500)
    price = models.DecimalField(decimal_places=5, max_digits=10)
    img2 = models.ImageField()

    # img = models.Image
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
