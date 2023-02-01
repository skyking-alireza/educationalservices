from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.
from blog.models import blog ,category_blog
from .serializer import blog_serializer , category_blog_serializer
from .permissions import IsAdmin
from rest_framework.response import Response
import os
from .mixins import update_by_image
from rest_framework import status
class blog_view(ListCreateAPIView):
    queryset = blog.objects.all()
    serializer_class = blog_serializer
    permission_classes = [IsAdmin]
class RUD_blog_view(update_by_image,RetrieveUpdateDestroyAPIView):
    queryset = blog
    serializer_class = blog_serializer
    permission_classes = [IsAdmin]
class category_blog_view(ListCreateAPIView):
    queryset = category_blog.objects.all()
    serializer_class = category_blog_serializer
    permission_classes = [IsAdmin]
class RUD_category_blog_view(update_by_image,RetrieveUpdateDestroyAPIView):
    queryset = category_blog
    serializer_class = category_blog_serializer
    permission_classes = [IsAdmin]
    def delete(self, request, pk):
        instance = self.get_object()
        os.remove(instance.image.path)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
