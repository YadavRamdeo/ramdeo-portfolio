from django.db import models

class PersonalInfo(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    summary = models.TextField()
    linkedin_url = models.URLField(blank=True, default="")
    github_url = models.URLField(blank=True, default="")
    email = models.EmailField(default="example@example.com")
    phone = models.CharField(max_length=20, blank=True, default="")
    location = models.CharField(max_length=100, default="India")
    leetcode_problems = models.IntegerField(default=0)
    leetcode_rating = models.IntegerField(default=0)
    years_experience = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Skill(models.Model):
    SKILL_CATEGORIES = [
        ('languages', 'Languages'),
        ('frameworks', 'Frameworks/Technologies'),
        ('aiml', 'AI/ML'),
        ('databases', 'Databases'),
        ('devops', 'DevOps'),
        ('cloud', 'Cloud & Tools'),
        ('concepts', 'Concepts'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=SKILL_CATEGORIES)
    proficiency = models.IntegerField(default=80)
    icon = models.CharField(max_length=50, blank=True, default="")

    def __str__(self):
        return self.name


class Technology(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, default="")
    icon = models.CharField(max_length=50, blank=True, default="")

    def __str__(self):
        return self.name


class Experience(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    location = models.CharField(max_length=100, blank=True, default="")
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()
    achievements = models.TextField(blank=True, default="")
    technologies = models.ManyToManyField(Technology, blank=True)

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.position} at {self.company}"


class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=100)
    field_of_study = models.CharField(max_length=100, default="Computer Science")
    start_year = models.IntegerField()
    end_year = models.IntegerField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    cgpa = models.CharField(max_length=20, blank=True, default="")

    class Meta:
        ordering = ['-start_year']

    def __str__(self):
        return f"{self.degree} from {self.institution}"


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=500, blank=True, default="")
    technologies = models.ManyToManyField(Technology, blank=True)
    github_url = models.URLField(blank=True, default="")
    live_url = models.URLField(blank=True, default="")
    image_url = models.URLField(blank=True, default="")
    featured = models.BooleanField(default=False)
    created_date = models.DateField()
    achievements = models.TextField(blank=True, default="")

    class Meta:
        ordering = ['-created_date']

    def __str__(self):
        return self.title


class Certification(models.Model):
    name = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    issue_date = models.DateField()
    expiry_date = models.DateField(null=True, blank=True)
    credential_url = models.URLField(blank=True, default="")

    class Meta:
        ordering = ['-issue_date']

    def __str__(self):
        return self.name


class Achievement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title
