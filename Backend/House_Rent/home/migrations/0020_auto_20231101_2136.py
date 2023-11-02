# Generated by Django 3.2.20 on 2023-11-01 15:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0019_alter_scheduleviewing_mobile_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='scheduleviewing',
            name='date',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='scheduleviewing',
            name='property',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.property'),
        ),
    ]