# Generated by Django 3.2.20 on 2023-11-01 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0021_alter_scheduleviewing_property'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scheduleviewing',
            name='date',
            field=models.DateField(),
        ),
    ]