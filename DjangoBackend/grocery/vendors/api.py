from vendors.models import Vendor
from rest_framework import viewsets, permissions
from .serializers import VendorSerializer

#lead viewset
class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VendorSerializer