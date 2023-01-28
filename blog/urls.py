
from django.urls import path

from blog.views import blog_view, RUD_blog_view , category_blog_view, RUD_category_blog_view

urlpatterns =[
    path('blog' , blog_view.as_view()),
    path('RUD_blog/<int:pk>' , RUD_blog_view.as_view()),
    path('category_blog' , category_blog_view.as_view()),
    path('RUD_category_blog/<int:pk>' , RUD_category_blog_view.as_view()),
]
