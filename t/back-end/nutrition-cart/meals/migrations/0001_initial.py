# Generated by Django 3.0.6 on 2020-06-13 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Meals',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default=None, max_length=100)),
                ('img', models.CharField(default=None, max_length=100)),
                ('kcal', models.DecimalField(decimal_places=5, max_digits=10)),
                ('protein', models.DecimalField(decimal_places=5, max_digits=10)),
                ('fat', models.DecimalField(decimal_places=5, max_digits=10)),
                ('carbohydrate', models.DecimalField(decimal_places=5, max_digits=10)),
                ('sodium', models.DecimalField(decimal_places=5, max_digits=10)),
                ('vitaminc', models.DecimalField(decimal_places=5, max_digits=10)),
                ('strMeal', models.CharField(default=None, max_length=100)),
                ('strInstructions', models.CharField(default=None, max_length=150)),
                ('strMealThumb', models.CharField(default=None, max_length=100)),
                ('strIngredient1', models.CharField(default=None, max_length=30)),
                ('strIngredient2', models.CharField(default=None, max_length=30)),
                ('strIngredient3', models.CharField(default=None, max_length=30)),
                ('strIngredient4', models.CharField(default=None, max_length=30)),
                ('strIngredient5', models.CharField(default=None, max_length=30)),
                ('strIngredient6', models.CharField(default=None, max_length=30)),
                ('strIngredient7', models.CharField(default=None, max_length=30)),
                ('strIngredient8', models.CharField(default=None, max_length=30)),
                ('strIngredient9', models.CharField(default=None, max_length=30)),
                ('strIngredient10', models.CharField(default=None, max_length=30)),
                ('strIngredient11', models.CharField(default=None, max_length=30)),
                ('strIngredient12', models.CharField(default=None, max_length=30)),
                ('strIngredient13', models.CharField(default=None, max_length=30)),
                ('strIngredient14', models.CharField(default=None, max_length=30)),
                ('strIngredient15', models.CharField(default=None, max_length=30)),
                ('strIngredient16', models.CharField(default=None, max_length=30)),
                ('strIngredient17', models.CharField(default=None, max_length=30)),
                ('strIngredient18', models.CharField(default=None, max_length=30)),
                ('strIngredient19', models.CharField(default=None, max_length=30)),
                ('strIngredient20', models.CharField(default=None, max_length=30)),
                ('strMeasure1', models.CharField(default=None, max_length=10)),
                ('strMeasure2', models.CharField(default=None, max_length=10)),
                ('strMeasure3', models.CharField(default=None, max_length=10)),
                ('strMeasure4', models.CharField(default=None, max_length=10)),
                ('strMeasure5', models.CharField(default=None, max_length=10)),
                ('strMeasure6', models.CharField(default=None, max_length=10)),
                ('strMeasure7', models.CharField(default=None, max_length=10)),
                ('strMeasure8', models.CharField(default=None, max_length=10)),
                ('strMeasure9', models.CharField(default=None, max_length=10)),
                ('strMeasure10', models.CharField(default=None, max_length=10)),
                ('strMeasure11', models.CharField(default=None, max_length=10)),
                ('strMeasure12', models.CharField(default=None, max_length=10)),
                ('strMeasure13', models.CharField(default=None, max_length=10)),
                ('strMeasure14', models.CharField(default=None, max_length=10)),
                ('strMeasure15', models.CharField(default=None, max_length=10)),
                ('strMeasure16', models.CharField(default=None, max_length=10)),
                ('strMeasure17', models.CharField(default=None, max_length=10)),
                ('strMeasure18', models.CharField(default=None, max_length=10)),
                ('strMeasure19', models.CharField(default=None, max_length=10)),
                ('strMeasure20', models.CharField(default=None, max_length=10)),
            ],
        ),
    ]