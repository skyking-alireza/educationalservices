from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from main.models import user, election, votes
class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        validated_data['username'] = validated_data.get('phonenumber')
        validated_data['is_active'] = 1
        validated_data['is_superuser'] = 0
        validated_data['is_is_staff'] = 0
        return super(user_serializer, self).create(validated_data)
class staff_user_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        exclude = ['virtualnumber','descriptionotherassociation','is_superuser','fathername','otherassociation','arena','skill','proposal','candidate','typemember','validate']
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        validated_data['username'] = validated_data.get('phonenumber')
        validated_data['is_staff'] = 1
        validated_data['is_active'] = 0
        return super(staff_user_serializer, self).create(validated_data)
class user_update_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        exclude = ['is_staff' , 'is_superuser', 'is_active' , 'password' , 'phonenumber', 'username']
class students_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['username' , 'first_name', 'last_name' , 'email' , 'profile', 'grade', 'field_of_Study','studentcode','birthday','address','skill','proposal']
class masters_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['id' ,'username' ,'is_active', 'first_name', 'last_name' , 'email' , 'profile', 'grade', 'field_of_Study','studentcode','birthday','address']
class able_master_serializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['is_active']
class seri_election(serializers.ModelSerializer):
    class Meta:
        model = election
        fields = '__all__'
class seri_create_election(serializers.ModelSerializer):
    class Meta:
        model = election
        exclude = ['participant']
class seri_votes(serializers.ModelSerializer):
    class Meta:
        model = votes
        fields = '__all__'
class seri_test(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=250)
    first_name = serializers.CharField(max_length=250)
    first_name = serializers.CharField(max_length=250)
    last_name = serializers.CharField(max_length=250)
    elections_id = serializers.IntegerField()
    user_id = serializers.IntegerField()
    votes = serializers.IntegerField()
