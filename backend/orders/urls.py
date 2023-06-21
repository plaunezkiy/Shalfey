from rest_framework import routers
from django.urls import path, include
from orders.views import OrderViewSet

router = routers.DefaultRouter()
router.register('orders', OrderViewSet, basename='orders')


urlpatterns = [
    path('', include(router.urls))
]
