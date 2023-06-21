from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views

router = DefaultRouter()
router.register('me', views.UserView, basename='me')

urlpatterns = [
    # path('me/', views.UserView.as_view()),
    path('', include(router.urls)),
    path('register/', views.RegisterView.as_view()),
    path('export_vendor_to_csv/<slug:slug>/', views.export_vendors_to_csv),
]
