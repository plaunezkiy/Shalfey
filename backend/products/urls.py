from rest_framework import routers
from django.urls import path, include
from products.views import DiseaseViewSet, BranchViewSet, VariantViewSet
from users.views import VendorViewSet

router = routers.DefaultRouter()
router.register('diseases', DiseaseViewSet, basename='diseases')
router.register('branches', BranchViewSet, basename='branches')
router.register('variants', VariantViewSet, basename='variants')
router.register('vendors', VendorViewSet, basename='vendors')


urlpatterns = [
    path('', include(router.urls))
]
