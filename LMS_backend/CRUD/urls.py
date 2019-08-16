
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken import views
from CRUD import view_sets

router = routers.DefaultRouter()
router.register(r'books', view_sets.BookViewSet)
router.register(r'authors', view_sets.AuthorViewSet)
router.register(r'library_users', view_sets.LibraryUserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token, name='api-token-auth')
]
