# Generated by Django 3.0.6 on 2020-05-27 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('deliveries', '0002_remove_delivery_deliveryadress'),
    ]

    operations = [
        migrations.AddField(
            model_name='delivery',
            name='deliveryadress',
            field=models.CharField(default='email', max_length=100),
        ),
    ]