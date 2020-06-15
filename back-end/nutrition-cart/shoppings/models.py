from django.db import models
from django.contrib.postgres.fields import ArrayField

from django.db import models
from django.utils import timezone
# from users.models import User
from deliveries.models import Delivery
from users.models import User

def upload_path(instance, filename):
    return '/'.join(['images', filename])

class ShoppingList(models.Model):
    shoppinglist_id = models.AutoField(primary_key=True)
    name = models.CharField(default="None", max_length=100)
    img = models.CharField(default="None", max_length=100)
    #img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    price = models.DecimalField(decimal_places=5, max_digits=10)
    state = models.BooleanField(default = False)
    delivery = models.ForeignKey(Delivery, related_name='shoppinglist', null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, blank=True,  related_name='shoppinglist', null=True, on_delete=models.CASCADE)
