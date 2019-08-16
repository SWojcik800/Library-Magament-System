from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Author, Book, LibraryUser
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.views import View
from .serializers import AuthorSerializer, BookSerializer, LibraryUserSerializer

# Create your views here.

class AuthorViewSet(viewsets.ModelViewSet):

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class BookViewSet(viewsets.ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer

class LibraryUserViewSet(viewsets.ModelViewSet):

    queryset = LibraryUser.objects.all()
    serializer_class = LibraryUserSerializer

