from django.contrib.auth.hashers import make_password
from django.db.models import Q
from rest_framework import serializers

from main.models import user


class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        validated_data['username'] = validated_data.get('phonenumber')
        validated_data['is_superuser'] = 0
        validated_data['is_staff'] = 0
        validated_data['is_active'] = 1
        return super(user_serializer, self).create(validated_data)