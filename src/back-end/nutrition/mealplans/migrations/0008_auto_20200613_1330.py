# Generated by Django 3.0.7 on 2020-06-13 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mealplans', '0007_auto_20200613_1323'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mealplan',
            old_name='name',
            new_name='strmeals',
        ),
        migrations.AlterField(
            model_name='mealplan',
            name='strInstructions',
            field=models.CharField(default='None', max_length=3000),
        ),
    ]
