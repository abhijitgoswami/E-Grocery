from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Shop(models.Model):
    shopname = models.CharField(max_length=100)
    shopaddress = models.CharField(max_length=100)
    licno = models.CharField(max_length=100, unique=True)
    owner = models.ForeignKey(User, related_name="shops", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)