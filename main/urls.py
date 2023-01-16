from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,TokenVerifyView)
from django.urls import path
from main.views import user_view, data_user_view, election_view, view_set_election, view_del_election

urlpatterns = [
    path('user/',user_view.as_view() ),
    path('election/',election_view.as_view() ),
    path('data_user/',data_user_view.as_view() ),
    path('set_election/',view_set_election ),
    path('del_election/',view_del_election ),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', TokenVerifyView.as_view(), name='token_verify'),

]