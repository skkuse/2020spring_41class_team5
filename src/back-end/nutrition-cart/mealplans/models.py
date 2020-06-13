from django.db import models
from django.utils import timezone
# from users.models import User


def upload_path(instance, filename):
    return '/'.join(['images', filename])


class MealPlan(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # = models.CharField(default="None", max_length=100)
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    strMeal = models.CharField(default="None", max_length=100)
    strInstructions = models.CharField(default="None", max_length=3000)
    img = models.CharField(default="None", max_length=200)
    strIngredient1 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient2 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient3 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient4 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient5 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient6 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient7 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient8 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient9 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient10 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient11 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient12 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient13 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient14 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient15 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient16 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient17 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient18 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient19 = models.CharField(default="None", max_length=100, blank = True)
    strIngredient20 = models.CharField(default="None", max_length=100, blank = True)
    strMeasure1 =models.CharField(default="None", max_length=100)
    strMeasure2 =models.CharField(default="None", max_length=100)
    strMeasure3 =models.CharField(default="None", max_length=100)
    strMeasure4 =models.CharField(default="None", max_length=100)
    strMeasure5 =models.CharField(default="None", max_length=100)
    strMeasure6 =models.CharField(default="None", max_length=100)
    strMeasure7 =models.CharField(default="None", max_length=100)
    strMeasure8 =models.CharField(default="None", max_length=100)
    strMeasure9 =models.CharField(default="None", max_length=100)
    strMeasure10 =models.CharField(default="None", max_length=100)
    strMeasure11 =models.CharField(default="None", max_length=100)
    strMeasure12 =models.CharField(default="None", max_length=100)
    strMeasure13 =models.CharField(default="None", max_length=100)
    strMeasure14 =models.CharField(default="None", max_length=100)
    strMeasure15 =models.CharField(default="None", max_length=100)
    strMeasure16 =models.CharField(default="None", max_length=100)
    strMeasure17 =models.CharField(default="None", max_length=100)
    strMeasure18 =models.CharField(default="None", max_length=100)
    strMeasure19 =models.CharField(default="None", max_length=100)
    strMeasure20 =models.CharField(default="None", max_length=100)
