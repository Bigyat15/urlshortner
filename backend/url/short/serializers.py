from rest_framework import serializers
from .models import ShortUrl

class ShortUrlSerializer(serializers.ModelSerializer):
    class Meta:
        models = ShortUrl
        fields = "__all__"