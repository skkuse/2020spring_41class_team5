from rest_framework import serializers
from .models import MealPlan
from rest_framework.response import Response
from ingredients.serializers import IngredientsSerializer


# class MealPlanListSerializer(serializers.ListSerializer):
#     def create(self, validated_data):
#         mealplans = [MealPlan(**item) for item in validated_data]
#         return MealPlan.objects.bulk_create(mealplans)


class MealPlanSerializer(serializers.ModelSerializer):
  ingredients = IngredientsSerializer(many=True)

  class Meta:
    model = MealPlan
    fields = fields = ('id', 'users', 'ingredients', 'strMeal', 'strMeal',
                       'strMeal', 'strInstructions', 'img', 'mealType', 'strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient5', 'strIngredient6', 'strIngredient7',
                       'strIngredient8', 'strIngredient9', 'strIngredient10', 'strMeasure1', 'strMeasure2', 'strMeasure3', 'strMeasure4', 'strMeasure5', 'strMeasure6', 'strMeasure7')


#      = models.CharField(default="None", max_length=100)
#      = models.CharField(default="None", max_length=3000)
#      = models.CharField(default="None", max_length=200)
#      = models.CharField(default="None", max_length=100)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#      = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient11 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient12 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient13 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient14 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient15 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient16 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient17 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient18 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient19 = models.CharField(default="None", max_length=100, blank = True)
#     strIngredient20 = models.CharField(default="None", max_length=100, blank = True)
#     strMeasure1 =models.CharField(default="None", max_length=100)
#     strMeasure2 =models.CharField(default="None", max_length=100)
#     strMeasure3 =models.CharField(default="None", max_length=100)
#     strMeasure4 =models.CharField(default="None", max_length=100)
#     strMeasure5 =models.CharField(default="None", max_length=100)
#     strMeasure6 =models.CharField(default="None", max_length=100)
#     strMeasure7 =models.CharField(default="None", max_length=100)
#     strMeasure8 =models.CharField(default="None", max_length=100)
#     strMeasure9 =models.CharField(default="None", max_length=100)
#     strMeasure10 =models.CharField(default="None", max_length=100)
#     strMeasure11 =models.CharField(default="None", max_length=100)
#     strMeasure12 =models.CharField(default="None", max_length=100)
#     strMeasure13 =models.CharField(default="None", max_length=100)
#     strMeasure14 =models.CharField(default="None", max_length=100)
#     strMeasure15 =models.CharField(default="None", max_length=100)
#     strMeasure16 =models.CharField(default="None", max_length=100)
#     strMeasure17 =models.CharField(default="None", max_length=100)
#     strMeasure18 =models.CharField(default="None", max_length=100)
#     strMeasure19 =models.CharField(default="None", max_length=100)
#     strMeasure20 =models.CharField(default="None", max_length=100)



# [
#     {"mealType": "blub", "img": null, "name": "blu1"},
#     {"mealType": "blubblub", "img": null, "name": "blublub"}
# ]
