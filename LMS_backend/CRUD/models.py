from django.db import models
import datetime

# Create your models here.
class Author(models.Model):
    first_name = models.TextField(max_length=50)
    last_name = models.TextField(max_length=50)

    def __str__(self):
        return self.first_name+' '+self.last_name

class Book(models.Model):
    title = models.TextField(max_length=255)
    author = models.ManyToManyField(Author)
    is_available = models.BooleanField(default=False)
    release_date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.author+': '+self.title