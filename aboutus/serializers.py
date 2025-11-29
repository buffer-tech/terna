from rest_framework import serializers
from .models import AboutUs

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ['project_name', 'description', 'version', 'launch_date', 
                  'features', 'tech_stack', 'collaborators']
