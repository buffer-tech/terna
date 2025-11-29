from django.urls import path
from . import views

urlpatterns = [
    # HTML FEED PAGE
    path("feed/", views.issue_feed_page, name="issue_feed"),

]
