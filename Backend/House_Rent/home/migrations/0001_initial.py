# Generated by Django 3.2.20 on 2023-10-26 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('name', models.CharField(max_length=255)),
                ('tc', models.BooleanField()),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('crtate_date', models.DateTimeField(auto_now_add=True)),
                ('update_date', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='property',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, upload_to='')),
                ('rent_Amount', models.CharField(default='BDT', max_length=200)),
                ('property_Address', models.TextField(default='', max_length=999)),
                ('About_Property', models.TextField(default='', max_length=2000)),
                ('type', models.CharField(choices=[('House', 'House'), ('Office', 'Office')], default='', max_length=100)),
                ('Completion', models.CharField(choices=[('Ready', 'Ready'), ('Not Ready', 'Not Ready')], default='', max_length=100)),
                ('Purpose', models.CharField(choices=[('For Rent', 'For Rent'), ('For Sale', 'For Sale')], default='', max_length=100)),
            ],
        ),
    ]
