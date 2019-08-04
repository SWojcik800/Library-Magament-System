
from django.urls import path, include

from rest_framework import routers
from CRUD import views
router = routers.DefaultRouter()
router.register(r'books', views.BookViewSet)
router.register(r'authors', views.AuthorViewSet)
router.register(r'library_users', views.LibraryUserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
