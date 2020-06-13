# Generated by Django 3.0.6 on 2020-06-12 16:40

import deliveries.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('deliverydate', models.DateTimeField(default=django.utils.timezone.now)),
                ('delcreateddate', models.DateTimeField(auto_now_add=True)),
                ('deliveryadress', models.CharField(default='None', max_length=100)),
                ('name', models.CharField(default='None', max_length=100)),
                ('img', models.ImageField(blank=True, null=True, upload_to=deliveries.models.upload_path)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
