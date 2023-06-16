from django.contrib.auth.models import AbstractUser
from django.db import models


# class User(models.Model):
#     id = models.TextField(primary_key=True)
#     role = models.TextField()  # This field type is a guess.
#     username = models.TextField(unique=True)
#     email = models.CharField(unique=True, max_length=255)
#     password_hash = models.TextField()

#     class Meta:
#         managed = False
        # db_table = 'User'
class ShopUser(AbstractUser):
    class UserRoles(models.TextChoices):
        moderator = 'moderator', 'Moderator'
        vendor    = 'vendor',    'Vendor'
        customer  = 'customer',  'Customer'

    role = models.CharField(max_length=15, choices=UserRoles.choices, default=UserRoles.customer)


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
