from django.db import models
from django.utils import timezone
# from users.models import User


def upload_path(instance, filename):
    return '/'.join(['images', filename])


class MealPlan(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # = models.CharField(default="None", max_length=100)
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    idMeal = models.AutoField(primary_key=True)
    mealType = models.CharField(default="None", max_length=100)
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(default="None", max_length=100)
    strInstructions = models.CharField(default="None", max_length=2000)
    strMealThumb = models.CharField(default="None", max_length=100)
    strIngredient1 = models.CharField(default="None", max_length=100)
    strIngredient2 = models.CharField(default="None", max_length=100)
    strIngredient3 = models.CharField(default="None", max_length=100)
    strIngredient4 = models.CharField(default="None", max_length=100)
    strIngredient5 = models.CharField(default="None", max_length=100)
    strIngredient6 = models.CharField(default="None", max_length=100)
    strIngredient7 = models.CharField(default="None", max_length=100)
    strIngredient8 = models.CharField(default="None", max_length=100)
    strIngredient9 = models.CharField(default="None", max_length=100)
    strIngredient10 = models.CharField(default="None", max_length=100)
    strIngredient11 = models.CharField(default="None", max_length=100)
    strIngredient12 = models.CharField(default="None", max_length=100)
    strIngredient13 = models.CharField(default="None", max_length=100)
    strIngredient14 = models.CharField(default="None", max_length=100)
    strIngredient15 = models.CharField(default="None", max_length=100)
    strIngredient16 = models.CharField(default="None", max_length=100)
    strIngredient17 = models.CharField(default="None", max_length=100)
    strIngredient18 = models.CharField(default="None", max_length=100)
    strIngredient19 = models.CharField(default="None", max_length=100)
    strIngredient20 = models.CharField(default="None", max_length=100)
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
