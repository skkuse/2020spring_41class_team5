# Generated by Django 3.0.6 on 2020-06-13 04:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meals', '0002_auto_20200613_1338'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meals',
            name='vitaminc',
        ),
    ]
