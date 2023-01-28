from django.db import models
from tinymce.models import HTMLField

class category_blog(models.Model):
    name = models.CharField(max_length=150)
    image = models.FileField(upload_to='frontend/public/images/category_blog')
class blog(models.Model):
    category = models.ManyToManyField(category_blog)
    title = models.CharField(max_length=150)
    body = HTMLField()
    image = models.FileField(upload_to='frontend/public/images/blog')
    description = HTMLField()
    time = models.DateField()
