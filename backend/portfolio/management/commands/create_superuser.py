from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create a superuser for the portfolio'

    def handle(self, *args, **options):
        if User.objects.filter(username='admin').exists():
            self.stdout.write(self.style.WARNING('Admin user already exists!'))
            return

        User.objects.create_superuser(
            username='admin',
            email='admin@portfolio.com', 
            password='admin123'
        )

        self.stdout.write(self.style.SUCCESS('Successfully created superuser: admin'))
        self.stdout.write('Password: admin123')
