# Generated by Django 4.1.3 on 2023-01-10 14:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_user_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='election',
            name='participant',
            field=models.ManyToManyField(related_name='participant', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='election',
            name='candidates',
            field=models.ManyToManyField(related_name='candidates', to=settings.AUTH_USER_MODEL),
        ),
    ]