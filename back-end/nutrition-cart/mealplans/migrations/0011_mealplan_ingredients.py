# Generated by Django 3.0.6 on 2020-06-15 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ingredients', '0001_initial'),
        ('mealplans', '0010_mealplan_mealtype'),
    ]

    operations = [
        migrations.AddField(
            model_name='mealplan',
            name='Ingredients',
            field=models.ManyToManyField(blank=True, null=True, to='ingredients.Ingredients'),
        ),
    ]