# Generated by Django 3.2.20 on 2023-11-01 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0018_scheduleviewing'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scheduleviewing',
            name='mobile_Number',
            field=models.BigIntegerField(default='+880', unique=True),
        ),
    ]
