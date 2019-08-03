from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.TextField(max_length=255)
    author = models.TextField(max_length=255)