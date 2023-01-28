from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from course.models import courses, courses_and_students
from course.serializer import seri_course, seri_courses_and_students

class view_courses(ListCreateAPIView):
    queryset = courses.objects.all()
    serializer_class = seri_course
class view_courses_and_students(ListCreateAPIView):
    queryset = courses_and_students.objects.all()
    serializer_class = seri_courses_and_students
@api_view(['GET'])
def view_return_courses_by_student(request):
    try:
        list_of_courses = courses_and_students.objects.raw(
            f'select 1 id , name , image , rate , description ,price , date_create from  course_courses_and_students_students INNER JOIN  course_courses on user_id = {request.user.id} GROUP BY name HAVING  count(*) > 1')
        list_courses = []
        [ list_courses.append({'name' : x.name , 'image' : x.image , 'rate' : x.rate , 'description' : x.description , 'price' : x.price , 'date_create' : x.date_create })  for x in list_of_courses]
        return Response({'data' : list_courses,'status' : 'ok'})
    except:
        return Response({'status' : 'bad'})
