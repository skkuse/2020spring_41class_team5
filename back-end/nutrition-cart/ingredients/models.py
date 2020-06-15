from django.db import models
from django.contrib.postgres.fields import ArrayField

from django.db import models
from django.utils import timezone
from shoppings.models import ShoppingList
from mealplans.models import MealPlan
# from users.models import User

def upload_path(instance, filename):
    return '/'.join(['images', filename])

class Ingredients(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(default="None", max_length=100)
    img = models.CharField(default="None", max_length=100)
    kcal = models.DecimalField(decimal_places=5, max_digits=10)
    protein = models.DecimalField(decimal_places=5, max_digits=10)
    fat = models.DecimalField(decimal_places=5, max_digits=10)
    carbohydrate = models.DecimalField(decimal_places=5, max_digits=10)
    sodium= models.DecimalField(decimal_places=5, max_digits=10)
    vitaminc = models.DecimalField(decimal_places=5, max_digits=10)
    shoppingList = models.ManyToManyField(ShoppingList, related_name='ingredients', null=True)
    mealplan = models.ManyToManyField(MealPlan, related_name='ingredients', null=True)

    #img2 = models.ImageField(blank= True, null=True)
    #list = ArrayField(models.CharField(max_length=10), default=list)
    # img = models.Image
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
