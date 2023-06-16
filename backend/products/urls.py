from rest_framework import routers
from django.urls import path, include
from products.views import DiseaseViewSet, BranchViewSet, VariantViewSet

router = routers.DefaultRouter()
router.register('diseases', DiseaseViewSet, basename='diseases')
router.register('branches', BranchViewSet, basename='branches')
router.register('variants', VariantViewSet, basename='variants')


urlpatterns = [
    path('', include(router.urls))
]
