# Generated by Django 3.0.6 on 2020-06-08 03:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='sex',
            new_name='gender',
        ),
    ]