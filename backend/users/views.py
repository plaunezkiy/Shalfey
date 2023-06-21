import csv
from django.http import HttpResponse
from rest_framework import viewsets, status, permissions, generics
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render
from products.serializers import VariantSerializer
from orders.serializers import OrderSerializer
from .serializers import UserSerializer, VendorSerializer, RegistrationSerializer
from .models import Vendor


class UserView(viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = RegistrationSerializer

    def list(self, request):
        user = request.user
        data = UserSerializer(user).data
        return Response({'user': data})

    @action(detail=False)
    def orders(self, request):
        user = request.user
        orders = user.orders.all()
        data = OrderSerializer(orders, many=True).data
        return Response(data)
        # return users orders

class RegisterView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user).data,
            "message": "Аккаунт успешно зарегистрирован",
        })

class VendorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    lookup_field = 'slug'

    @action(detail=True)
    def products(self, request, slug):
        vendor = get_object_or_404(Vendor, slug=slug)
        products = vendor.products.all()
        serializer = VariantSerializer(products, many=True)
        return Response(data=serializer.data)


def export_vendors_to_csv(request, slug):
    vendor = Vendor.objects.get(slug=slug)
    response = HttpResponse(content_type="text/csv", headers={"Content-Disposition": f'attachment; filename="{slug}.csv"'})
    writer = csv.writer(response, delimiter="\n")
    writer.writerow([vendor.name, vendor.description, vendor.slug, vendor.website])
    for product in vendor.products.exclude(description__isnull=True):
        writer.writerow([product.name, product.description, product.slug, product.url, product.price])
    return response
    # vendors = ['dom-ayurveda', 'mahabazar']


    # def list(self, request):
    #     qset = self.queryset.exclude(name__exact='')[:20]
    #     serializer = self.serializer_class(qset, many=True)
    #     return Response(serializer.data)

    # def retrieve(self, request, slug):
    #     vendor_slug = request.query_params['vendor']
    #     obj = self.queryset.get(slug=slug, vendor__slug=vendor_slug)
    #     serializer = self.serializer_class(obj)
    #     return Response(serializer.data)