from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PersonalInfo, Skill, Technology, Experience, Education, Project, Certification, Achievement
from .serializers import (
    PersonalInfoSerializer, SkillSerializer, TechnologySerializer,
    ExperienceSerializer, EducationSerializer, ProjectSerializer,
    CertificationSerializer, AchievementSerializer
)

# Personal Info Views
class PersonalInfoListCreateView(generics.ListCreateAPIView):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer

class PersonalInfoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer

# Skill Views
class SkillListCreateView(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

# Technology Views
class TechnologyListCreateView(generics.ListCreateAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer

class TechnologyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer

# Experience Views
class ExperienceListCreateView(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ExperienceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

# Education Views
class EducationListCreateView(generics.ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EducationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

# Project Views
class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# Certification Views
class CertificationListCreateView(generics.ListCreateAPIView):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer

class CertificationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer

# Achievement Views
class AchievementListCreateView(generics.ListCreateAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class AchievementDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

# Portfolio Summary View (Read-only)
@api_view(['GET'])
def portfolio_summary(request):
    try:
        personal_info = PersonalInfo.objects.first()
        skills = Skill.objects.all()
        experiences = Experience.objects.all()
        education = Education.objects.all()
        featured_projects = Project.objects.filter(featured=True)
        certifications = Certification.objects.all()
        achievements = Achievement.objects.all()
        
        data = {
            'personal_info': PersonalInfoSerializer(personal_info).data if personal_info else None,
            'skills': SkillSerializer(skills, many=True).data,
            'experiences': ExperienceSerializer(experiences, many=True).data,
            'education': EducationSerializer(education, many=True).data,
            'featured_projects': ProjectSerializer(featured_projects, many=True).data,
            'certifications': CertificationSerializer(certifications, many=True).data,
            'achievements': AchievementSerializer(achievements, many=True).data,
        }
        
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)

# Bulk Operations Views
class BulkSkillsView(APIView):
    def post(self, request):
        serializer = SkillSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BulkProjectsView(APIView):
    def post(self, request):
        serializer = ProjectSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)