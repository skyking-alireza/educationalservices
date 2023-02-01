from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,TokenVerifyView)
from django.urls import path
from main.views import user_view, data_user_view, election_view, view_set_election, view_del_election, \
    view_get_users, vote_view, view_set_vote, update_user_view, view_candidates, create_election_view, \
    view_end_elections, MyTokenObtainPairView, RUD_election_view , staff_user_view , students_view , masters_view, able_master_view

urlpatterns = [
    path('user/',user_view.as_view() ),
    path('students/',students_view.as_view() ),
    path('masters/',masters_view.as_view() ),
    path('able_master/<int:pk>',able_master_view.as_view() ),
    path('update_user/<int:pk>',update_user_view .as_view() ),
    path('election/',election_view.as_view() ),
    path('staff_user/',staff_user_view.as_view() ),
    path('create_election/',create_election_view.as_view() ),
    path('data_user/',data_user_view.as_view() ),
    path('set_election/',view_set_election ),
    path('del_election/',view_del_election ),
    path('get_users/',view_get_users ),
    path('end_elections/',view_end_elections ),
    path('RUD_election/<int:pk>',RUD_election_view.as_view() ),
    path('vote',vote_view.as_view() ),
    path('set_vote',view_set_vote ),
    path('candidates',view_candidates ),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', TokenVerifyView.as_view(), name='token_verify'),

]
