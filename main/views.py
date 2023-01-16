from django.db import connections
from django.shortcuts import render
# Create your views here.
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from main.models import user, election
from main.serializer import user_serializer, seri_election

class user_view(ListCreateAPIView):
    queryset = user.objects.all()
    serializer_class = user_serializer
class election_view(ListCreateAPIView):
    queryset = election.objects.all()
    serializer_class = seri_election
class data_user_view(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = user_serializer
    def get_queryset(self):
        users = user.objects.filter(id=self.request.user.id)
        return users
@api_view(['POST'])
def view_set_election(request):
    try :
        cursor = connections['default'].cursor()
        cursor.execute(
            f'insert into main_election_participant (election_id ,user_id) select election_id , user_id from main_election_candidates where user_id == {request.user.id} and election_id == {request.data.get("election_id")}')
        return Response({'status' : True})
    except:
        return Response({'status' : False})
@api_view(['POST'])
def view_del_election(request):
    try :
        cursor = connections['default'].cursor()
        cursor.execute(
            f'delete FROM main_election_participant where user_id == {request.user.id} and election_id == {request.data.get("election_id")} ')
        return Response({'status' : True})
    except:
        return Response({'status' : False})
