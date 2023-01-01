from django.shortcuts import render

# Create your views here.
from rest_framework import permissions
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from main.models import user
from main.serializer import user_serializer


class user_view(ListCreateAPIView):
    queryset = user.objects.all()
    serializer_class = user_serializer
class data_user_view(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = user_serializer
    def get_queryset(self):
        users = user.objects.filter(id=self.request.user.id)
        return users
