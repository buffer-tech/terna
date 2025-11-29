from django.shortcuts import render, get_object_or_404
from django.db.models import F

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Issue
from .serializers import IssueSerializer


@api_view(["GET"])
def issue_list(request):
    """
    Return all issues for the public feed (JSON API).
    Everyone (citizens) can see these through the API.
    """
    issues = Issue.objects.all().order_by("-created_at")
    serializer = IssueSerializer(issues, many=True, context={"request": request})
    return Response(serializer.data)


@api_view(["POST"])
def upvote_issue(request, pk):
    """
    Increase upvotes of a specific issue (JSON API).
    Used when citizens upvote an issue in the feed from frontend.
    """
    issue = get_object_or_404(Issue, pk=pk)
    issue.upvotes = F("upvotes") + 1
    issue.save()
    issue.refresh_from_db()
    serializer = IssueSerializer(issue, context={"request": request})
    return Response(serializer.data, status=status.HTTP_200_OK)


def issue_feed_page(request):
    """
    Server-rendered HTML feed view (no React).
    This will use a Django template: public_feed/issue_feed.html
    """
    issues = Issue.objects.all().order_by("-created_at")
    context = {"issues": issues}
    return render(request, "public_feed/issue_feed.html", context)
