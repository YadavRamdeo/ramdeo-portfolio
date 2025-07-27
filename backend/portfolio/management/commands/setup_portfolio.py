from django.core.management.base import BaseCommand
from django.core.management import call_command

class Command(BaseCommand):
    help = 'Complete portfolio setup'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting portfolio setup...'))

        self.stdout.write('Running migrations...')
        call_command('makemigrations')
        call_command('migrate')

        self.stdout.write('Creating superuser...')
        call_command('create_superuser')

        self.stdout.write('Loading portfolio data...')
        call_command('load_portfolio_data')

        self.stdout.write(self.style.SUCCESS('Portfolio setup completed!'))
