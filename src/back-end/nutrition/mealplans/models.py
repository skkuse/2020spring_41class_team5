from django.db import models
from django.utils import timezone
# from users.models import User


class MealPlan(models.Model):
    id = models.AutoField(primary_key=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    mealName = models.CharField(default="None", max_length=100)
    mealCalories = models.IntegerField(default=0, max_length=10)
    mealCarbonhydrate = models.IntegerField(default=0, max_length=10)
    mealProtein = models.IntegerField(default=0, max_length=10)
    mealFat = models.IntegerField(default=0, max_length=10)
    mealMineral = models.IntegerField(default=0, max_length=10)
    mealVitaminC = models.IntegerField(default=0, max_length=10)
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    #mealType = models.CharField(default="None", max_length=100)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
