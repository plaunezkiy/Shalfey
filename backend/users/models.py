from django.contrib.auth.models import AbstractUser
from django.db import models
from users.managers import CustomUserManager


class ShopUser(AbstractUser):
    class UserRoles(models.TextChoices):
        moderator = 'moderator', 'Модератор'
        vendor    = 'vendor',    'Продавец'
        customer  = 'customer',  'Покупатель'
    # username = None
    # email = models.EmailField("Email Field", unique=True)
    role = models.CharField(max_length=15, choices=UserRoles.choices, default=UserRoles.customer)
    basket = models.ForeignKey('orders.Basket', on_delete=models.SET_NULL, null=True)
    # USERNAME_FIELD = "email"
    # REQUIRED_FIELDS = []

    # objects = CustomUserManager()

    def __str__(self):
        return self.email
    


class Vendor(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=False, default="")
    owner = models.ForeignKey(ShopUser, blank=True, null=True, on_delete=models.CASCADE, related_name='vendors')
    website = models.URLField(blank=True, null=True)
    # userid = models.ForeignKey(User, models.DO_NOTHING, db_column='userId')  # Field name made lowercase.

    def __str__(self):
        return self.website

    class Meta:
        db_table = 'Vendor'
