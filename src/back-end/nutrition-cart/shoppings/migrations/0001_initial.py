# Generated by Django 3.0.6 on 2020-06-12 16:40

from django.db import migrations, models
import django.db.models.deletion
import shoppings.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('deliveries', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShoppingList',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='None', max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('img', models.ImageField(blank=True, null=True, upload_to=shoppings.models.upload_path)),
                ('state', models.BooleanField(default=False)),
                ('delivery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='deliveries.Delivery')),
            ],
        ),
    ]