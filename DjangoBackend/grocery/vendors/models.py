from django.db import models

# Create your models here.
class Vendor(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    mobile = models.IntegerField(unique=True)
    address = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

