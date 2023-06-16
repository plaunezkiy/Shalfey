from rest_framework import serializers
from products.models import Disease, MedicineBranch, ProductVariant
from users.models import Vendor


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        depth = 5
        fields = '__all__'


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicineBranch
        depth = 5
        fields = ('id', 'name', 'slug', 'categories', 'herbsets')


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'


class VariantSerializer(serializers.ModelSerializer):
    vendor = VendorSerializer(read_only=True)
    image_url = serializers.CharField(source="image")

    class Meta:
        model = ProductVariant
        exclude = ('image',)
        lookup_field = 'slug'
