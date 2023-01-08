from django.db import models
from main.models import user
from tinymce.models import HTMLField
# Create your models here.
class courses(models.Model):
    name = models.CharField(max_length=255,unique=True)
    teacher = models.ForeignKey(user, on_delete=models.CASCADE)
    date_create = models.DateField(auto_created=True)
    count  = models.IntegerField()
    rate = models.IntegerField()
    description = HTMLField()
    price = models.IntegerField()
    image = models.FileField(upload_to='frontend/src/images/courses')
class courses_and_students(models.Model):
    curse = models.ForeignKey(courses,on_delete=models.CASCADE)
    students = models.ManyToManyField(user)