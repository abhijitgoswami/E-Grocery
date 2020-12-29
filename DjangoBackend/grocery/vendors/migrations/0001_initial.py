# Generated by Django 3.0.8 on 2020-12-28 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('mobile', models.IntegerField()),
                ('password', models.CharField(max_length=255)),
            ],
        ),
    ]
