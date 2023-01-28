# Generated by Django 4.1.3 on 2023-01-21 17:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_rename_tovote_votes_voter_remove_votes_elections_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='votes',
            name='elections',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='election', to='main.election'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='votes',
            name='voter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='voter', to=settings.AUTH_USER_MODEL),
        ),
    ]