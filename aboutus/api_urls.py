from django.urls import path
from .api_views import AboutUsAPIView

urlpatterns = [
    path('', AboutUsAPIView.as_view(), name='aboutus_api'),
]
