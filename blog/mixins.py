from rest_framework.response import Response

class update_by_image:
    serializer_class = None
    model_class = None
    def update(self, request, *args, **kwargs):
        data = request.data.copy()
        instance = self.get_object()
        if len(request.data.get("image")):
            data['image'] = request.data.get("image")
        else:
            data['image'] = instance.image
        serializer = self.get_serializer(instance ,data = data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data})
        else:
            return Response({'status' : False})
