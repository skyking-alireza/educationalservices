# Generated by Django 4.1.3 on 2023-01-09 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_courses_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='image',
            field=models.FileField(upload_to='frontend/public/images/courses'),
        ),
    ]
