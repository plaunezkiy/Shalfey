from django.db import models
from products.models import ProductVariant
from users.models import ShopUser
from db_schema.models import StampedModel


class QtyItem(models.Model):
    item = models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    class Meta:
        abstract = True


class BasketItem(QtyItem):
    item = models.ForeignKey(ProductVariant, on_delete=models.CASCADE, related_name='item_in_baskets')
    basket = models.ForeignKey('Basket', on_delete=models.CASCADE)


class OrderItem(QtyItem):
    item = models.ForeignKey(ProductVariant, on_delete=models.CASCADE, related_name='item_in_orders')
    order = models.ForeignKey('Order', on_delete=models.CASCADE)


class Basket(models.Model):
    items = models.ManyToManyField(to=ProductVariant, through=BasketItem, related_name='baskets')


class Order(StampedModel):
    class OrderStatus(models.TextChoices):
        PLACED = 'placed', 'Оформлен'
        PAID = 'paid', 'Оплачен'
        IN_TRANSIT = 'in_transit', 'В доставке'
        DELIVERED = 'delivered', 'Доставлен'

    customer = models.ForeignKey(ShopUser, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(max_length=15, choices=OrderStatus.choices, default=OrderStatus.PLACED)
    items = models.ManyToManyField(to=ProductVariant, through=OrderItem, related_name='orders')
    # discount = models.ForeignKey(Discount)

    def add_to_order(self, item: ProductVariant, quantity: int):
        for order_item in self.items.all():
            if order_item == item:
                order_item.quantity += quantity
                order_item.save()
                return
        self.items.add(item, through_defaults={'quantity': quantity})

    def get_price(self):
        """
            returns the total price of the order:
            sum(item.item.price * item.quantity)
        """
        # TODO: return self.discount.apply(price)
        return self.items.aggregate(price=models.Sum(models.F("price") * models.F("quantity")))['price']


# from orders.models import Order, OrderItem
# from products.models import ProductVariant
# item1 = ProductVariant.objects.get(id=3983)
# item2 = ProductVariant.objects.get(id=3981)
# order = Order.objects.get(id=2)
# order.add_to_order(item1, 2)