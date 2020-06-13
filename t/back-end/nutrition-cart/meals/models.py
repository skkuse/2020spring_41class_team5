from django.db import models
from django.contrib.postgres.fields import ArrayField

from django.db import models
from django.utils import timezone
# from users.models import User

def upload_path(instance, filename):
    return '/'.join(['images', filename])

class Meals(models.Model):
    strMeal= models.CharField(default=None, max_length=100)
    strInstructions= models.CharField(default=None, max_length=400)
    img= models.CharField(default=None, max_length=200)
    strIngredient1= models.CharField(default=None, max_length=30, blank=True)
    strIngredient2= models.CharField(default=None, max_length=30, blank=True)
    strIngredient3= models.CharField(default=None, max_length=30, blank=True)
    strIngredient4= models.CharField(default=None, max_length=30, blank=True)
    strIngredient5= models.CharField(default=None, max_length=30, blank=True)
    strIngredient6=models.CharField(default=None, max_length=30, blank=True)
    strIngredient7=models.CharField(default=None, max_length=30, blank=True)
    strIngredient8=models.CharField(default=None, max_length=30, blank=True)
    strIngredient9=models.CharField(default=None, max_length=30, blank=True)
    strIngredient10=models.CharField(default=None, max_length=30, blank=True)
    strIngredient11=models.CharField(default=None, max_length=30, blank=True)
    strIngredient12=models.CharField(default=None, max_length=30, blank=True)
    strIngredient13=models.CharField(default=None, max_length=30, blank=True)
    strIngredient14=models.CharField(default=None, max_length=30, blank=True)
    strIngredient15=models.CharField(default=None, max_length=30, blank=True)
    strIngredient16=models.CharField(default=None, max_length=30, blank=True)
    strIngredient17=models.CharField(default=None, max_length=30, blank=True)
    strIngredient18=models.CharField(default=None, max_length=30, blank=True)
    strIngredient19=models.CharField(default=None, max_length=30, blank=True)
    strIngredient20=models.CharField(default=None, max_length=30, blank=True)
    intMeasure1=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure2=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure3=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure4=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure5=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure6=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure7=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure8=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure9=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure10=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure11=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure12=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure13=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure14=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure15=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure16=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure17=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure18=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure19=models.DecimalField(decimal_places=5, max_digits=10)
    intMeasure20=models.DecimalField(decimal_places=5, max_digits=10)
    #img2 = models.ImageField(blank= True, null=True)
    #list = ArrayField(models.CharField(max_length=10), default=list)
    # img = models.Image
    # delcreateddate = models.DateTimeField(auto_now_add=True)
    # User = To whom belongs this delivery (=> cross reference to items)
    # items = reference to Shopping list and make a list out of it
