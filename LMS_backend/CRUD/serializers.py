from rest_framework import serializers
from .models import Book, LibraryUser

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'borrowed_by', 'pk']

class LibraryUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LibraryUser
        fields = ['first_name', 'last_name']
