from django.db import models
import json

# Create your models here.
class AboutUs(models.Model):
    project_name = models.CharField(max_length=200, default="JanSeva")
    description = models.TextField()
    version = models.CharField(max_length=50, default="1.0.0")
    launch_date = models.CharField(max_length=100)
    features = models.JSONField(default=list)  # List of features
    tech_stack = models.JSONField(default=dict)  # Dictionary of tech stack
    collaborators = models.JSONField(default=list)  # List of collaborators
    
    class Meta:
        verbose_name = "About Us"
        verbose_name_plural = "About Us"
    
    def __str__(self):
        return self.project_name
