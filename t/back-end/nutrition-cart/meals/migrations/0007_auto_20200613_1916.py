# Generated by Django 3.0.6 on 2020-06-13 10:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meals', '0006_auto_20200613_1718'),
    ]

    operations = [
        migrations.RenameField(
            model_name='meals',
            old_name='strMealThumb',
            new_name='img',
        ),
    ]