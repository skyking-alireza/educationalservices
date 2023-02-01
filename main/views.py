from django.db import connections
from django.shortcuts import render
# Create your views here.
from rest_framework import permissions, serializers
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, UpdateAPIView, \
    CreateAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from main.models import user, election, votes
from main.permissions import IsAdmin
from main.serializer import user_serializer, seri_election, seri_votes, user_update_serializer, seri_create_election, \
    seri_test , staff_user_serializer , students_serializer, masters_serializer , able_master_serializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['admin'] = user.is_superuser
        token['master'] = user.is_staff
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
class user_view(ListCreateAPIView):
    queryset = user.objects.all()
    serializer_class = user_serializer
class students_view(ListAPIView):
    queryset = user.objects.filter(is_staff=False)
    serializer_class = students_serializer
class masters_view(ListAPIView):
    queryset = user.objects.filter(is_staff=True,is_superuser=False)
    serializer_class = masters_serializer
class staff_user_view(ListCreateAPIView):
    queryset = user.objects.all()
    serializer_class = staff_user_serializer

class update_user_view(UpdateAPIView):
    queryset = user
    serializer_class = user_update_serializer
class able_master_view(UpdateAPIView):
    queryset = user
    serializer_class = able_master_serializer
    permission_classes = [IsAdmin]
class vote_view(ListCreateAPIView):
    queryset = votes.objects.all()
    serializer_class = seri_votes


class election_view(ListAPIView):
    queryset = election.objects.all()
    serializer_class = seri_election


class create_election_view(CreateAPIView):
    queryset = election.objects.all()
    serializer_class = seri_create_election
    permission_classes = [IsAdmin]


class RUD_election_view(RetrieveUpdateDestroyAPIView):
    queryset = election
    serializer_class = seri_election
    permission_classes = [IsAdmin]

class data_user_view(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = user_serializer

    def get_queryset(self):
        users = user.objects.filter(id=self.request.user.id)
        return users


@api_view(['POST'])
def view_set_election(request):
    try:
        cursor = connections['default'].cursor()
        cursor.execute(
            f'insert into main_election_participant (election_id ,user_id) select election_id , user_id from main_election_candidates where user_id == {request.user.id} and election_id == {request.data.get("election_id")}')
        return Response({'status': True})
    except:
        return Response({'status': False})


@api_view(['POST'])
def view_del_election(request):
    try:
        cursor = connections['default'].cursor()
        cursor.execute(
            f'delete FROM main_election_participant where user_id == {request.user.id} and election_id == {request.data.get("election_id")} ')
        return Response({'status': True})
    except:
        return Response({'status': False})


def dictfetchall(cursor):
    desc = cursor.description
    return [
        dict(zip([col[0] for col in desc], row))
        for row in cursor.fetchall()
    ]


@api_view(['POST'])
def view_get_users(request):
    try:
        z = '('
        for a in request.data.get("users_id"):
            z += f'{a} ,'
        z += ')'
        z = z[:-2] + z[-2 + 1:]
        user_of_list = election.objects.raw(
            f'select id, username , first_name , last_name , descriptionotherassociation , profile from main_user where id in {z}')
        users = []
        [users.append({'username': x.username, 'id': x.id, 'first_name': x.first_name, 'last_name': x.last_name,
                       'profile': x.profile, 'descriptionotherassociation': x.descriptionotherassociation, }) for x in
         user_of_list]
        return Response({'status': users})
    except:
        return Response({'status': False})


@api_view(['POST'])
def view_set_vote(request):
    try:
        data = request.data
        try:
            votes.objects.get(elections_id=data.get('elections'), voter_id=request.user.id)
            return Response({'status': False})
        except:
            vote = votes.objects.create(elections_id=data.get('elections'), voter_id=request.user.id)
            [vote.votes.add(x) for x in data.get('votes')]
            vote.save()
        return Response({'status': True})
    except votes.DoesNotExist:
        return Response({'status': False})


@api_view(['GET'])
def view_candidates(request):
    try:
        candidates = user.objects.filter(candidate=1)
        data = user_serializer(candidates, many=True)
        return Response({'data': data.data})
    except:
        return Response({'status': False})


@api_view(['GET'])
def view_end_elections(request):
    try:
        list_of_elections = election.objects.raw(
            'select 1 id, name ,first_name , last_name,  elections_id ,user_id, count(user_id) as votes  from main_election inner join main_votes on main_election.id = main_votes.elections_id inner join main_votes_votes mvv on main_votes.id = mvv.votes_id inner join main_user on user_id = main_user.id GROUP BY user_id HAVING COUNT(user_id)')
        data = seri_test(list_of_elections,many=True)
        return Response({'status': data.data})
    except:
        return Response({'status': 'bad'})
