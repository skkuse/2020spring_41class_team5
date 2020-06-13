# Generated by Django 3.0.6 on 2020-06-13 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='TBD', max_length=100)),
                ('gender', models.CharField(default='TBD', max_length=100)),
                ('address', models.CharField(default='TBD', max_length=100)),
                ('age', models.IntegerField(default=0)),
                ('height', models.IntegerField(default=0)),
                ('weight', models.IntegerField(default=0)),
                ('egg', models.BooleanField(default=False)),
                ('milk', models.BooleanField(default=False)),
                ('soybean', models.BooleanField(default=False)),
                ('peanut', models.BooleanField(default=False)),
                ('crab', models.BooleanField(default=False)),
                ('shrimp', models.BooleanField(default=False)),
                ('mackerel', models.BooleanField(default=False)),
                ('apple', models.BooleanField(default=False)),
                ('peach', models.BooleanField(default=False)),
                ('kiwi', models.BooleanField(default=False)),
            ],
        ),
    ]
