import os
import django
from datetime import date
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Populate database with Ramdeo Yadav resume data'

    def handle(self, *args, **options):
        from portfolio.models import (
            PersonalInfo, Skill, Technology, Experience, 
            Education, Project, Certification, Achievement
        )
        
        # Clear existing data
        PersonalInfo.objects.all().delete()
        Skill.objects.all().delete()
        Technology.objects.all().delete()
        Experience.objects.all().delete()
        Education.objects.all().delete()
        Project.objects.all().delete()
        Certification.objects.all().delete()
        Achievement.objects.all().delete()
        
        self.stdout.write(self.style.SUCCESS('Cleared existing data'))
        
        # Create Personal Info
        personal_info = PersonalInfo.objects.create(
            name="Ramdeo Yadav",
            title="Software Engineer",
            summary="Innovative and result-driven Software Engineer with 2+ years of experience in backend and full-stack development, distributed systems, and scalable microservices. Strong background in AI/ML development and ML-Ops practices. Adept in Python, Java, ReactJS, containerized deployments, and cloud-native architecture. Passionate about building intelligent and responsive systems that solve real-world problems using cutting-edge technology.",
            linkedin_url="https://linkedin.com/in/ramdeoyadav",
            github_url="https://github.com/YadavRamdeo",
            email="ramdeoyadav4545@gmail.com",
            phone="+91 9354067818",
            location="India",
            leetcode_problems=800,
            leetcode_rating=1536,
            years_experience=3
        )
        
        # Create Technologies
        technologies_data = [
            {"name": "Python", "description": "Primary programming language"},
            {"name": "Java", "description": "Object-oriented programming"},
            {"name": "JavaScript", "description": "Web development"},
            {"name": "C", "description": "System programming"},
            {"name": "C++", "description": "Competitive programming"},
            {"name": "Django", "description": "Python web framework"},
            {"name": "React.js", "description": "Frontend library"},
            {"name": "TensorFlow", "description": "Machine learning framework"},
            {"name": "PyTorch", "description": "Deep learning framework"},
            {"name": "scikit-learn", "description": "Machine learning library"},
            {"name": "Keras", "description": "Neural network library"},
            {"name": "PostgreSQL", "description": "Relational database"},
            {"name": "MongoDB", "description": "NoSQL database"},
            {"name": "Redis", "description": "In-memory database"},
            {"name": "SQLite", "description": "Lightweight database"},
            {"name": "Docker", "description": "Containerization"},
            {"name": "Kubernetes", "description": "Container orchestration"},
            {"name": "Jenkins", "description": "CI/CD automation"},
            {"name": "GitHub Actions", "description": "CI/CD pipeline"},
            {"name": "Kafka", "description": "Message streaming"},
            {"name": "AWS", "description": "Cloud platform"},
            {"name": "GCP", "description": "Google Cloud Platform"},
            {"name": "Azure", "description": "Microsoft Cloud Platform"},
            {"name": "REST APIs", "description": "API development"},
            {"name": "Git", "description": "Version control"},
            {"name": "Jira", "description": "Project management"},
        ]
        
        technologies = {}
        for tech_data in technologies_data:
            tech = Technology.objects.create(**tech_data)
            technologies[tech_data["name"]] = tech
        
        # Create Skills
        skills_data = [
            # Languages
            {"name": "Python", "category": "languages", "proficiency": 95},
            {"name": "Java", "category": "languages", "proficiency": 85},
            {"name": "JavaScript", "category": "languages", "proficiency": 80},
            {"name": "C", "category": "languages", "proficiency": 75},
            {"name": "C++", "category": "languages", "proficiency": 80},
            
            # Frameworks/Technologies
            {"name": "Django", "category": "frameworks", "proficiency": 90},
            {"name": "React.js", "category": "frameworks", "proficiency": 85},
            {"name": "TensorFlow", "category": "frameworks", "proficiency": 80},
            {"name": "PyTorch", "category": "frameworks", "proficiency": 75},
            {"name": "scikit-learn", "category": "frameworks", "proficiency": 85},
            {"name": "Keras", "category": "frameworks", "proficiency": 80},
            
            # AI/ML
            {"name": "MLOps", "category": "aiml", "proficiency": 85},
            {"name": "Model Deployment", "category": "aiml", "proficiency": 80},
            {"name": "NLP", "category": "aiml", "proficiency": 75},
            
            # Databases
            {"name": "PostgreSQL", "category": "databases", "proficiency": 85},
            {"name": "MongoDB", "category": "databases", "proficiency": 80},
            {"name": "Redis", "category": "databases", "proficiency": 75},
            {"name": "SQLite", "category": "databases", "proficiency": 85},
            
            # DevOps
            {"name": "Docker", "category": "devops", "proficiency": 85},
            {"name": "Kubernetes", "category": "devops", "proficiency": 80},
            {"name": "Jenkins", "category": "devops", "proficiency": 75},
            {"name": "GitHub Actions", "category": "devops", "proficiency": 80},
            {"name": "Kafka", "category": "devops", "proficiency": 75},
            
            # Cloud & Tools
            {"name": "AWS", "category": "cloud", "proficiency": 80},
            {"name": "GCP", "category": "cloud", "proficiency": 75},
            {"name": "Azure", "category": "cloud", "proficiency": 70},
            {"name": "REST APIs", "category": "cloud", "proficiency": 90},
            {"name": "Git", "category": "cloud", "proficiency": 90},
            {"name": "Jira", "category": "cloud", "proficiency": 75},
            
            # Concepts
            {"name": "OOP", "category": "concepts", "proficiency": 90},
            {"name": "Design Patterns", "category": "concepts", "proficiency": 85},
            {"name": "Multithreading", "category": "concepts", "proficiency": 80},
            {"name": "Algorithm Design", "category": "concepts", "proficiency": 85},
        ]
        
        for skill_data in skills_data:
            Skill.objects.create(**skill_data)
        
        # Create Education
        Education.objects.create(
            institution="National Institute of Technology, Kurukshetra",
            degree="M.C.A (Master of Computer Application)",
            field_of_study="Computer Application",
            start_year=2019,
            end_year=2022,
            is_current=False,
            cgpa="7.1/10"
        )
        
        # Create Experience
        # Aster DM HealthCare
        exp1 = Experience.objects.create(
            company="Aster DM HealthCare",
            position="Software Engineer",
            location="India",
            start_date=date(2025, 6, 1),
            end_date=None,
            is_current=True,
            description="Working on healthcare technology solutions and digital transformation initiatives.",
            achievements="Currently developing innovative healthcare solutions using cutting-edge technology."
        )
        
        # Freelancer
        exp2 = Experience.objects.create(
            company="Freelancer",
            position="Full-Stack Developer",
            location="Remote",
            start_date=date(2025, 1, 1),
            end_date=date(2025, 6, 1),
            is_current=False,
            description="Worked on various client projects focusing on web development and AI/ML solutions.",
            achievements="Successfully delivered multiple projects with high client satisfaction."
        )
        
        # Ciena India Pvt Ltd
        exp3 = Experience.objects.create(
            company="Ciena India Pvt Ltd",
            position="Software Engineer",
            location="India",
            start_date=date(2022, 1, 1),
            end_date=date(2024, 7, 1),
            is_current=False,
            description="Led the development and maintenance of NGSTAF, an internal dashboard system for real-time network monitoring and analytics.",
            achievements="""• Led the development and maintenance of NGSTAF, an internal dashboard system for real-time network monitoring and analytics, enhancing visibility across operations.
• Engineered scalable microservices with Python and Django to automate network deployment and provisioning, improving efficiency and reducing manual intervention.
• Designed and integrated RESTful APIs with Kafka to enable real-time data pipelines and seamless inter-service communication across systems.
• Implemented robust CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 40%.
• Deployed applications using Docker and Kubernetes on AWS cloud infrastructure.
• Collaborated cross-functionally with frontend, DevOps, and QA teams to enhance platform reliability and performance.
• Created ML models for network event prediction and failure analysis using TensorFlow and PyTorch."""
        )
        
        # Add technologies to experiences
        ciena_techs = ["Python", "Django", "Kafka", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "AWS", "TensorFlow", "PyTorch"]
        for tech_name in ciena_techs:
            if tech_name in technologies:
                exp3.technologies.add(technologies[tech_name])
        
        # Create Projects
        project1 = Project.objects.create(
            title="Inventory Management System",
            description="Developed a full-stack web app to manage stock, suppliers, and invoices. Integrated real-time analytics dashboard with REST APIs and dynamic React UI.",
            tech_stack="Python, Django, PostgreSQL, React.js, Docker",
            featured=True,
            created_date=date(2024, 3, 1),
            achievements="Successfully implemented real-time inventory tracking with 99.9% accuracy and reduced manual processing time by 60%."
        )
        
        # Add technologies to project1
        project1_techs = ["Python", "Django", "PostgreSQL", "React.js", "Docker"]
        for tech_name in project1_techs:
            if tech_name in technologies:
                project1.technologies.add(technologies[tech_name])
        
        project2 = Project.objects.create(
            title="NLP-Based Text Similarity Evaluation",
            description="Built a smart system to evaluate students' answers against model answers using cosine similarity. Deployed the application with Django backend, allowing teachers to review and assess text match scores automatically.",
            tech_stack="Python, NLP, scikit-learn, Django",
            featured=True,
            created_date=date(2023, 8, 1),
            achievements="Achieved 92% accuracy in text similarity matching and reduced grading time by 75%."
        )
        
        # Add technologies to project2
        project2_techs = ["Python", "Django", "scikit-learn"]
        for tech_name in project2_techs:
            if tech_name in technologies:
                project2.technologies.add(technologies[tech_name])
        
        # Create Certifications
        Certification.objects.create(
            name="Advanced Data Structures and Algorithms",
            issuer="Boss-Coder Academy",
            issue_date=date(2024, 6, 1),
            expiry_date=date(2025, 5, 31)
        )
        
        # Create Achievements
        Achievement.objects.create(
            title="Research Paper Published EPRA JOURNAL (IJRD)",
            description="Published research paper in EPRA International Journal of Research and Development",
            date=date(2021, 3, 1)
        )
        
        Achievement.objects.create(
            title="LeetCode Problem Solver",
            description="Solved 800+ problems on LeetCode with Contest Rating: 1,536",
            date=date(2024, 12, 1)
        )
        
        Achievement.objects.create(
            title="NIMCET AIR: 332",
            description="Achieved All India Rank 332 in NIMCET (Top NITs Admission Exam)",
            date=date(2019, 5, 1)
        )
        
        self.stdout.write(self.style.SUCCESS('Successfully populated database with Ramdeo Yadav resume data'))