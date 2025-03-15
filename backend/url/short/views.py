from django.shortcuts import render,redirect,get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ShortUrl
from .serializers import ShortUrlSerializer

# Create your views here.
@api_view(['POST'])
def create_short_url(request):
    data = request.data
    serializer = ShortUrlSerializer(data=data)
    if serializer.is_valid():
        short_url = serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_url_detail(request):
    urlss = ShortUrl.objects.all()
    serializedData = ShortUrlSerializer(urlss,many=True).data
    return Response(serializedData)

def redirect_short_url(request,short_code):
    url_entry = get_object_or_404(ShortUrl,short_code=short_code)
    url_entry.visit_count +=1
    url_entry.save()
    return redirect(url_entry.long_url)