from django.urls import path

from course.views import view_courses, view_courses_and_students

urlpatterns = [
    path('courses' , view_courses.as_view()),
    path('courses_and_students' , view_courses_and_students.as_view()),
]