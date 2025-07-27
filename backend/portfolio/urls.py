from django.urls import path
from .views import (
    PersonalInfoListCreateView, PersonalInfoDetailView,
    SkillListCreateView, SkillDetailView,
    TechnologyListCreateView, TechnologyDetailView,
    ExperienceListCreateView, ExperienceDetailView,
    EducationListCreateView, EducationDetailView,
    ProjectListCreateView, ProjectDetailView,
    CertificationListCreateView, CertificationDetailView,
    AchievementListCreateView, AchievementDetailView,
    BulkSkillsView, BulkProjectsView,
    portfolio_summary
)

urlpatterns = [
    # List and Create endpoints
    path('personal-info/', PersonalInfoListCreateView.as_view(), name='personal-info-list-create'),
    path('skills/', SkillListCreateView.as_view(), name='skills-list-create'),
    path('technologies/', TechnologyListCreateView.as_view(), name='technologies-list-create'),
    path('experiences/', ExperienceListCreateView.as_view(), name='experiences-list-create'),
    path('education/', EducationListCreateView.as_view(), name='education-list-create'),
    path('projects/', ProjectListCreateView.as_view(), name='projects-list-create'),
    path('certifications/', CertificationListCreateView.as_view(), name='certifications-list-create'),
    path('achievements/', AchievementListCreateView.as_view(), name='achievements-list-create'),
    
    # Detail endpoints (GET, PUT, PATCH, DELETE by ID)
    path('personal-info/<int:pk>/', PersonalInfoDetailView.as_view(), name='personal-info-detail'),
    path('skills/<int:pk>/', SkillDetailView.as_view(), name='skill-detail'),
    path('technologies/<int:pk>/', TechnologyDetailView.as_view(), name='technology-detail'),
    path('experiences/<int:pk>/', ExperienceDetailView.as_view(), name='experience-detail'),
    path('education/<int:pk>/', EducationDetailView.as_view(), name='education-detail'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('certifications/<int:pk>/', CertificationDetailView.as_view(), name='certification-detail'),
    path('achievements/<int:pk>/', AchievementDetailView.as_view(), name='achievement-detail'),
    
    # Bulk operations
    path('skills/bulk/', BulkSkillsView.as_view(), name='bulk-skills'),
    path('projects/bulk/', BulkProjectsView.as_view(), name='bulk-projects'),
    
    # Summary endpoint
    path('summary/', portfolio_summary, name='portfolio-summary'),
]