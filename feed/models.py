from django.db import models
from django.conf import settings


class Issue(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("In Progress", "In Progress"),
        ("Resolved", "Resolved"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="issues/", blank=True, null=True)
    location = models.CharField(max_length=255)
    area = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Pending")
    upvotes = models.IntegerField(default=0)
    tag = models.CharField(max_length=50)
    organisation = models.CharField(max_length=100)

    # 🔵 IMPORTANT: LINK ISSUE TO USER
    reported_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="issues"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
