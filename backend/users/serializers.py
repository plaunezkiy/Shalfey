from rest_framework import serializers
from users.models import ShopUser, Vendor


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopUser
        fields = ("email", "password")

    def create(self, validated_data):
        user = ShopUser.objects.create(
            username=validated_data["email"],
            email=validated_data["email"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    # role = serializers.CharField(source='get_role_display')

    class Meta:
        model = ShopUser
        fields = ('id', 'email', 'first_name', 'last_name', 'email', 'is_active', 'role')


class VendorSerializer(serializers.ModelSerializer):
    image_url = serializers.CharField(source="image")

    class Meta:
        model = Vendor
        # fields = '__all__'
        exclude = ('image',)


class VendorOwnerSerializer(UserSerializer):
    shop = VendorSerializer(source="vendors.first")

    class Meta:
        model = ShopUser
        fields = ('id', 'email', 'first_name', 'last_name', 'email', 'is_active', 'role', 'shop')

