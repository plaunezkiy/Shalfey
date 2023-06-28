from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from products.models import Disease, MedicineBranch, ProductVariant
from products.serializers import DiseaseSerializer, BranchSerializer, VariantSerializer


class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.filter(supercategories=None)
    serializer_class = DiseaseSerializer


class BranchViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = MedicineBranch.objects.all()
        diseases = Disease.objects.all()
        diseases_ser = DiseaseSerializer(diseases, many=True)
        serializer = BranchSerializer(queryset, many=True)
        return Response({
            "diseases": diseases_ser.data,
            "branches": serializer.data
        })


class VariantViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductVariant.objects.all().exclude(name__exact='')
    serializer_class = VariantSerializer
    lookup_field = 'slug'

    def list(self, request):
        qset = self.queryset.exclude(name__exact='')[:20]
        serializer = self.serializer_class(qset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, slug):
        vendor_slug = request.query_params['vendor']
        obj = self.queryset.get(slug=slug, vendor__slug=vendor_slug)
        serializer = self.serializer_class(obj)
        return Response(serializer.data)
