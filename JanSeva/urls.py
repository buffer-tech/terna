from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # HTML Pages (no /api/ prefix)
    path('feed/', include('feed.urls')),  # Access feed at /feed/
    path('aboutus/', include('aboutus.urls')),  # Access about at /aboutus/
    
    # API Endpoints
    path('api/home/', include('home.urls')),  # API for home/auth
    path('api/aboutus/', include('aboutus.api_urls')),  # API for about
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
