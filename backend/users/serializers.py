from rest_framework import serializers
from users.models import ShopUser, Vendor


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopUser
        fields = ("email", "password")


class UserSerializer(serializers.ModelSerializer):
    # role = serializers.CharField(source='get_role_display')

    class Meta:
        model = ShopUser
        fields = ('id', 'email', 'first_name', 'last_name', 'email', 'is_active', 'role')

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'