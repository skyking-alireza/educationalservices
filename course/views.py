from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
# Create your views here.
from course.models import courses, courses_and_students
from course.serializer import seri_course, seri_courses_and_students


class view_courses(ListCreateAPIView):
    queryset = courses.objects.all()
    serializer_class = seri_course
class view_courses_and_students(ListCreateAPIView):
    queryset = courses_and_students.objects.all()
    serializer_class = seri_courses_and_students