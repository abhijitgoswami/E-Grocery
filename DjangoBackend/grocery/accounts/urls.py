from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/vendorregistration', RegisterAPI.as_view()),
    path('api/auth/vendorlogin', LoginAPI.as_view()),
    path('api/auth/vendor', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]