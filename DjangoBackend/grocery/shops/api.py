from shops.models import Shop
from rest_framework import viewsets, permissions
from .serializers import ShopSerializer

#shop viewset
class ShopViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ShopSerializer

    def get_queryset(self):

        return self.request.user.shops.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# permission_classes = [
#         permissions.IsAuthenticated
#     ]

#     serializer_class = ShopSerializer

#     def get_queryset(self):
#         return self.request.user.shops.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)