from rest_framework import serializers
from .models import courses, courses_and_students


class seri_course(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = courses


class seri_courses_and_students(serializers.ModelSerializer):
   class Meta:
       fields = '__all__'
       model = courses_and_students