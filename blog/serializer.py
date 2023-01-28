from rest_framework import serializers

from blog.models import blog , category_blog


class blog_serializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = '__all__'
class category_blog_serializer(serializers.ModelSerializer):
    class Meta:
        model = category_blog
        fields = '__all__'
