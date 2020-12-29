from django.db import models

# Create your models here.
class Vendor(models.Model):
    """ Vendor infomation Model """
    email=models.EmailField(primary_key=True,blank=False,)
    firstname=models.CharField(max_length=255,blank=False)
    lastname=models.CharField(max_length=255,blank=False)
    address=models.CharField(max_length=255,blank=False)
    mobile=models.IntegerField(blank=False)
    password=models.CharField(blank=False,max_length=255)

    def __str__(self):
        return self.email
