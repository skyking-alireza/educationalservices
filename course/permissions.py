from rest_framework.permissions import BasePermission,SAFE_METHODS
class IsMaster(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
                return True
        return bool(request.user and request.user.is_staff)
class JustMaster(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)
class CheckMaster(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.teacher == request.user
