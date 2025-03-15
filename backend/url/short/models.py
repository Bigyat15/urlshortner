from django.db import models
import random
import string
# Create your models here.
def generate_short_code():
    return "".join(random.choices(string.ascii_letters+string.digits,k=6))

class ShortUrl(models.Model):
    long_url = models.URLField()
    short_code = models.CharField(max_length=10,unique=True,default=generate_short_code)
    created_at=  models.DateTimeField(auto_now_add=True)
    visit_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.short_code} -> {self.long_url}"