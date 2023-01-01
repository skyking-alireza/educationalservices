# Generated by Django 4.1.3 on 2022-12-03 14:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_rename_phomenumber_user_phonenumber'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='countvote',
        ),
        migrations.RemoveField(
            model_name='votes',
            name='voter',
        ),
        migrations.AddField(
            model_name='user',
            name='proposal',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='validate',
            field=models.BooleanField(default=0),
        ),
        migrations.CreateModel(
            name='election',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('starttime', models.DateTimeField()),
                ('endtime', models.DateTimeField()),
                ('candidates', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='votes',
            name='elections',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='main.election'),
            preserve_default=False,
        ),
    ]