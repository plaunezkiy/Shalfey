from django.db import models
from users.models import Vendor

# TODO: Придумать как проплаченные товары поднимать при поиске
# https://stackoverflow.com/questions/47182481/dynamic-filter-in-django
# for dynamic filtering - useful for creating collections (Новинки, по акции)
# Алгоритм оценки карточки и продавца (сток, цена, отзывы, буст и тд.)


class Disease(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=False, default="")
    subcategories = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='supercategories')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Disease'


class Category(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=False, default="")
    subcategories = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='supercategories')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Category'


class HerbSet(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=False, default="")
    subsets = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='supersets')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'HerbSet'


class Product(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=False, default="")
    image = models.ImageField(upload_to='media/', blank=True, null=True)

    diseases = models.ManyToManyField(Disease, related_name='products')
    categories = models.ManyToManyField(Category, related_name='products')
    herbsets = models.ManyToManyField(HerbSet, related_name='products')

    class Meta:
        db_table = 'Product'


class ProductVariant(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=True, default="")
    url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='variants/', blank=True, null=True)
    quantity = models.IntegerField(default=0)
    price = models.FloatField(null=True)
    product = models.ForeignKey(Product, blank=True, null=True, on_delete=models.SET_NULL, related_name='variants')
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.slug

    class Meta:
        db_table = 'ProductVariant'


class MedicineBranch(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(allow_unicode=True, null=True, default="")
    categories = models.ManyToManyField(Category, related_name='branch')
    herbsets = models.ManyToManyField(HerbSet, related_name='branch')
    products = models.ManyToManyField(Product, related_name='branch')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'MedicineBranch'

