from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class user(AbstractUser):
    grades = [
        (1,'کاردانی'),
        (2,'کارشناسی'),
        (3,'دکتری'),
        (4,'دکتری حرفه ای'),
        (5,'دکتری تخصصی'),
              ]
    profile = models.FileField(upload_to='frontend/src/images/profile',null=True)
    grade = models.IntegerField(choices=grades)
    phonenumber = models.CharField(max_length=11)
    virtualnumber = models.CharField(max_length=11)
    fathername = models.CharField(max_length=50)
    studentcode = models.CharField(max_length=14)
    birthday = models.DateField()
    address = models.TextField()
    otherassociation = models.BooleanField(default=0)
    descriptionotherassociation = models.CharField(max_length=250 , null=True)
    arena = models.CharField(max_length=250 , null=True)
    skill = models.CharField(max_length=250 , null=True)
    proposal = models.CharField(max_length=250 , null=True)
    candidate = models.BooleanField(default=0)
    typemember = models.BooleanField(default=0)
    validate = models.BooleanField(default=0)

class detailsuser(models.Model):
    duser = models.ForeignKey(user , on_delete=models.CASCADE)
    details = models.TextField()
class election(models.Model):
    name = models.CharField(max_length=250)
    starttime = models.DateTimeField()
    endtime = models.DateTimeField()
    candidates = models.ManyToManyField(user)
class votes(models.Model):
    elections = models.ForeignKey(election , on_delete=models.CASCADE)
    tovote = models.ForeignKey(user , on_delete=models.CASCADE,related_name='tovote')
    voter = models.ManyToOneRel(user,election,'vote')
    timevote = models.DateTimeField(auto_now_add=True)