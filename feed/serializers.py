from rest_framework import serializers
from .models import Issue


class IssueSerializer(serializers.ModelSerializer):
    # extra fields for frontend naming
    imageUrl = serializers.SerializerMethodField()
    createdAt = serializers.DateTimeField(source="created_at")

    # user info (who posted the issue)
    reporterName = serializers.CharField(source="reported_by.username", read_only=True)
    reporterId = serializers.IntegerField(source="reported_by.id", read_only=True)

    class Meta:
        model = Issue
        fields = [
            "id",
            "title",
            "description",
            "location",
            "area",
            "status",
            "upvotes",
            "tag",
            "organisation",
            "imageUrl",
            "createdAt",
            "reporterName",
            "reporterId",
        ]

    def get_imageUrl(self, obj):
        request = self.context.get("request")
        if obj.image and hasattr(obj.image, "url"):
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None
