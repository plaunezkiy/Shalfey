from rest_framework import serializers
from users.serializers import UserSerializer
from orders.models import Order


class OrderSerializer(serializers.ModelSerializer):
    # customer = UserSerializer(read_only=True)
    price = serializers.SerializerMethodField()

    class Meta:
        model = Order
        # fields = '__all__'
        exclude = ('customer',)
        read_only_fields = ('status', 'modified')
        depth = 1
    
    def get_price(self, obj: Order):
        return obj.get_price()
