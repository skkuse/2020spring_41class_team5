# Generated by Django 3.0.6 on 2020-05-27 02:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('deliveries', '0004_auto_20200527_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='deliveryadress',
            field=models.CharField(default='None', max_length=100),
        ),
    ]