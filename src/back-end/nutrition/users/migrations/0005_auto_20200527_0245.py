# Generated by Django 3.0.6 on 2020-05-27 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='healthState',
            field=models.CharField(default='TBD', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='sex',
            field=models.CharField(default='TBD', max_length=100),
        ),
    ]
