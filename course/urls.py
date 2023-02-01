from django.urls import path

from course.views import view_courses, view_courses_and_students, view_return_courses_by_student , view_courses_by_master , view_RUD_courses

urlpatterns = [
    path('courses' , view_courses.as_view()),
    path('courses_by_master' , view_courses_by_master.as_view()),
    path('RUD_courses/<int:pk>' , view_RUD_courses.as_view()),
    path('courses_and_students' , view_courses_and_students.as_view()),
    path('return_courses_by_student' , view_return_courses_by_student),
]
