from rest_framework.response import Response
from rest_framework import viewsets, permissions


from .serializers import VendorSerializer
from vendors.models import Vendor
from vendors.forms import VendorForm


#lead viewset
class VendorViewSet(viewsets.ModelViewSet):
    """Vendor view set """   

    serializer_class=VendorSerializer
    def list(self, request, *args, **kwargs):

        return Response({'messge':"Welcome"})

    def create(self,request,pk=None):
        queryset = VendorSerializer(data=request.data)
        form=VendorForm(request.data)
        if form.is_valid():
            form.save()
            return Response({'messge':"done"})
        else:
            return Response({'messge':"failed"})

    def get_queryset(self):
        return self.request.user.vendors.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)