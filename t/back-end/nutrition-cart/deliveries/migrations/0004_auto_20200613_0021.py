# Generated by Django 3.0.6 on 2020-06-12 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deliveries', '0003_shoppinglist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoppinglist',
            name='delivery_id',
        ),
        migrations.AddField(
            model_name='shoppinglist',
            name='delivery',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='shoppinglist', to='deliveries.Delivery'),
        ),
    ]