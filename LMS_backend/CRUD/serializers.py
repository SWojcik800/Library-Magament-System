from rest_framework import serializers
from .models import Author, Book, LibraryUser

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ['first_name', 'last_name']

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'is_available', 'release_date', 'borrowed_by', 'pk']

class LibraryUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LibraryUser
        fields = ['first_name', 'last_name']
