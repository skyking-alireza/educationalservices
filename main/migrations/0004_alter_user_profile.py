# Generated by Django 4.1.3 on 2022-12-03 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_user_countvote_remove_votes_voter_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile',
            field=models.FileField(null=True, upload_to='frontend/src/images/profile'),
        ),
    ]