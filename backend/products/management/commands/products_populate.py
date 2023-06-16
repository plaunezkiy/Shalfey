import csv
import json
from django.core.management.base import BaseCommand
from django.utils.text import slugify
from products.models import Category, Disease, HerbSet, MedicineBranch, ProductVariant
from users.models import Vendor


class Command(BaseCommand):
    help = 'Populate the database with categories, disesases and herbsets'
    model_fields = {
        # subself - name of m2m field on self (model to model)
        # subbranch - name of m2m field on branch (branch to model)
        Category: {'subself': 'subcategories', 'subbranch': 'categories'},
        HerbSet: {'subself': 'subsets', 'subbranch': 'herbsets'},
        Disease: {'subself': 'subcategories'},
    }

    def create_model_instance(self, instance, model, field_name):
        """
        Creates a nested db model instance from a dict object 
        instance: {title: str, topics: instance[]}
        field_name: field name that defines model m2m relation on 'self'
        """
        (i_obj, created) = model.objects.get_or_create(name=instance['title'])
        i_obj.slug = slugify(instance['title'], allow_unicode=True)
        if instance.get('topics', None):
            for sub_instance in instance['topics']:
                sub_obj = self.create_model_instance(sub_instance, model, field_name)
                # field that defined m2m relation on 'self'
                rel_field = getattr(i_obj, field_name)
                rel_field.add(sub_obj)
        i_obj.save()
        return i_obj

    def handle(self, *args, **kwargs):
        self.stdout.write("Populating vendors")
        with open(f'data/vendors.csv', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            header = next(reader)
            for row in reader:
                id_, name, url = row
                Vendor.objects.get_or_create(pk=id_, name=name, website=url)
        
        self.stdout.write("Populating products")
        with open(f'data/products.csv', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            header = next(reader)
            for row in reader:
                id_, name, slug, url, vendor_id = row
                vendor = Vendor.objects.get(pk=vendor_id)
                ProductVariant.objects.get_or_create(pk=id_, name=name, slug=slug, url=url, vendor=vendor)

        # self.stdout.write("Populating categories")
        # for fname in ['russian', 'ayurveda', 'kitay']:
        #     with open(f'data/{fname}.json', encoding='utf-8') as f:
        #         data = json.load(f)
        #         (branch, _) = MedicineBranch.objects.get_or_create(name=data['title'])
        #         branch.slug = slugify(data['title'], allow_unicode=True)
        #         # categories, herbsets, diseases
        #         for i, model in enumerate(self.model_fields.keys()):
        #             for instance in data['topics'][i]['topics']:
        #                 i_obj = self.create_model_instance(instance, model, self.model_fields[model]['subself'])
        #                 # if branch has connection (eg no Disease)
        #                 if self.model_fields[model].get('subbranch', None):
        #                     field = getattr(branch, self.model_fields[model]['subbranch'])
        #                     field.add(i_obj)
        #         branch.save()
        self.stdout.write(
            self.style.SUCCESS('Successfully populated the database')
        )
