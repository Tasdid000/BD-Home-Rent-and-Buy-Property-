# Generated by Django 3.2.20 on 2023-10-26 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='property_Area',
            field=models.CharField(default='sqft', max_length=200),
        ),
    ]