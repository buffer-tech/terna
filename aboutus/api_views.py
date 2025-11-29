from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import AboutUs
from .serializers import AboutUsSerializer


class AboutUsAPIView(generics.ListAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer
    permission_classes = [AllowAny]
    
    def list(self, request, *args, **kwargs):
        # Get the first (and should be only) AboutUs entry
        about_us = AboutUs.objects.first()
        if about_us:
            serializer = self.get_serializer(about_us)
            return Response(serializer.data)
        else:
            # Return default data if no entry exists
            return Response({
                'project_name': 'JanSeva',
                'description': 'A citizen-centric issue reporting platform that enables residents to report civic issues with location data and images, and track their resolution status.',
                'version': '1.0.0',
                'launch_date': 'November 2025',
                'tech_stack': {
                    'backend': ['Django', 'Django REST Framework', 'SQLite'],
                    'authentication': 'Token-based Authentication',
                    'frontend': 'React',
                    'api': 'RESTful API'
                },
                'features': [
                    'User Registration and Authentication',
                    'Issue Reporting with Images and Location',
                    'Real-time Status Tracking',
                    'Issue History',
                    'Admin Dashboard'
                ],
                'collaborators': [
                    {
                        'id': 1,
                        'name': 'Prachi Nimbalkar',
                        'role': 'Full Stack Developer',
                        'email': 'nimbalkarp222@gmail.com',
                        'github': 'https://github.com/prachi-1126',
                        'linkedin': 'https://www.linkedin.com/in/prachiinimbalkar26/',
                        'avatar': 'https://via.placeholder.com/150',
                        'contributions': ['Backend API Development', 'Database Design', 'Authentication System']
                    },
                    {
                        'id': 2,
                        'name': 'Sanskruti Sugandhi',
                        'role': 'Frontend Developer',
                        'email': 'sanskruti.sugandhi4@gmail.com',
                        'github': 'https://github.com/sanskruti048',
                        'linkedin': 'https://www.linkedin.com/in/sanskruti-sugandhi-6573a3269/',
                        'avatar': 'https://via.placeholder.com/150',
                        'contributions': ['React UI Development', 'User Experience Design', 'Responsive Design']
                    },
                    {
                        'id': 3,
                        'name': 'Harsh Pardeshi',
                        'role': 'Backend Developer',
                        'email': 'harshvpardeshi@gmail.com',
                        'github': 'https://github.com/collab3',
                        'linkedin': 'https://www.linkedin.com/in/harshvpardeshi/',
                        'avatar': 'https://via.placeholder.com/150',
                        'contributions': ['API Security', 'Data Validation', 'Performance Optimization']
                    },
                    {
                        'id': 4,
                        'name': 'Pratham Dabhane',
                        'role': 'UI/UX Designer',
                        'email': 'pratham.dabhane.2503@gmail.com',
                        'github': 'https://github.com/Pratham-Dabhane',
                        'linkedin': 'https://linkedin.com/in/pratham-dabhane',
                        'avatar': 'https://via.placeholder.com/150',
                        'contributions': ['Interface Design', 'User Research', 'Prototyping']
                    },
                    {
                        'id': 5,
                        'name': 'Ritesh Pawar',
                        'role': 'Project Manager',
                        'email': 'riteshpawar0223@gmail.com',
                        'github': 'https://github.com/collab5',
                        'linkedin': 'https://www.linkedin.com/in/riteshhpawar23/',
                        'avatar': 'https://via.placeholder.com/150',
                        'contributions': ['Project Planning', 'Team Coordination', 'Quality Assurance']
                    }
                ]
            })
