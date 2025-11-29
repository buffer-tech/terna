from django.urls import path
from . import views

urlpatterns = [
    # HTML FEED PAGE - accessible at /feed/
    path("", views.issue_feed_page, name="issue_feed"),
]
