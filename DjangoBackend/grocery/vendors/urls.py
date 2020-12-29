from rest_framework import routers
from .api import VendorViewSet

router = routers.DefaultRouter()
router.register('api/vendors', VendorViewSet, 'vendors')

urlpatterns = router.urls


