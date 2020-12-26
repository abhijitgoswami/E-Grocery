from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Vendor(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    mobile = models.IntegerField(unique=True)
    address = models.TextField(blank=False)
    owner = models.ForeignKey(User, related_name="vendors", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

