from rest_framework import serializers
from .models import courses, courses_and_students


class seri_course(serializers.ModelSerializer):
    teacher = serializers.RelatedField(source='user', read_only=True)
    class Meta:
        fields = '__all__'
        model = courses
    def create(self, validated_data):
        validated_data['is_active'] = 0
        validated_data['teacher'] = self.context['request'].user
        return super(seri_course, self).create(validated_data)
class seri_UD_course(serializers.ModelSerializer):
   class Meta:
       exclude = ['is_active','teacher','date_create']
       model = courses
class seri_courses_and_students(serializers.ModelSerializer):
   class Meta:
       fields = '__all__'
       model = courses_and_students
