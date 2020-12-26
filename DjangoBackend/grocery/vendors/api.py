from vendors.models import Vendor
from rest_framework import viewsets, permissions
from .serializers import VendorSerializer

#lead viewset
class VendorViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated
    # ]

    serializer_class = VendorSerializer

    def get_queryset(self):
        return self.request.user.vendors.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)