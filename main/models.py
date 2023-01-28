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
    field_of_Studys = [
        (1,'برق صنعتی'),
        (2,'تأسیسات الکتریکی'),
        (3,'فناوری اطلاعات و ارتباطات'),
        (4,'الکترونیک'),
        (5,'نرم‌افزار کامپیوتر'),
        (6,'ساختمان'),
        (7,'نقشه برداری'),
        (8,'معماری'),
        (9,'حسابداری'),
        (10,'تبلیغات و بازاریابی'),
        (11,'صنایع فلزی - جوشکاری'),
        (12,'طراحی صنعتی'),
              ]
    profile = models.FileField(upload_to='frontend/src/images/profile',null=True)
    grade = models.IntegerField(choices=grades)
    field_of_Study = models.IntegerField(choices=field_of_Studys)
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
    is_active = models.BooleanField(default=1)
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
class detailsuser(models.Model):
    duser = models.ForeignKey(user , on_delete=models.CASCADE)
    details = models.TextField()
class election(models.Model):
    name = models.CharField(max_length=250)
    starttime = models.DateTimeField()
    endtime = models.DateTimeField()
    candidates = models.ManyToManyField(user , related_name='candidates')
    participant = models.ManyToManyField(user ,related_name='participant')
class votes(models.Model):
    elections = models.ForeignKey(election , on_delete=models.CASCADE, related_name='election')
    voter = models.ForeignKey(user , on_delete=models.CASCADE, related_name='voter')
    votes = models.ManyToManyField(user)
    timevote = models.DateTimeField(auto_now_add=True)