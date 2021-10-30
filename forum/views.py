from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TopicSerializer
from .models import Topic
from rest_framework.response import Response


# Create your views here.


class TopicView(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()

    def put(self, request, id=None):
        item = Topic.objects.get(id=id)
        serializer = TopicSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})