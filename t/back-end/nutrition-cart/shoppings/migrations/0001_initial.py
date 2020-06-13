# Generated by Django 3.0.6 on 2020-06-08 04:38

from django.db import migrations, models
import shoppings.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShoppingList',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='None', max_length=100)),
                ('img', models.ImageField(blank=True, null=True, upload_to=shoppings.models.upload_path)),
                ('price', models.DecimalField(decimal_places=5, max_digits=10)),
                ('state', models.BooleanField(default=False)),
                ('img2', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]