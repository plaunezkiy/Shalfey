from django.contrib import admin
from orders.models import *


class OrderItemsInline(admin.TabularInline):
    model = Order.items.through
    # raw_id_fields =("item",)


class OrderAdmin(admin.ModelAdmin):
    inlines = [
        OrderItemsInline,
    ]
    # filter_horizontal = ('items',)

admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
