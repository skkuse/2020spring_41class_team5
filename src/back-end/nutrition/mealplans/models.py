from django.db import models
from django.utils import timezone
# from users.models import User


class MealPlan(models.Model):
    id = models.AutoField(primary_key=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(default="None", max_length=100)
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    mealType = models.CharField(default="None", max_length=100)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
