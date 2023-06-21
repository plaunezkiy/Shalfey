# import csv
# from typing import List
from django.contrib import admin
# from django.shortcuts import redirect, render
# from django.urls import path
# from django.urls.resolvers import URLPattern
from users.models import *

# :class CsvImportForm(forms.Form)

# class VendorAdmin(admin.ModelAdmin, ExportCsvMixin):
#     change_list_template = "users/vendors_list.html"

#     def get_urls(self):
#         urls = super().get_urls()
#         my_urls = [
#             path('import-csv/', self.import_csv)
#         ]
#         return my_urls + urls
    
#     def import_csv(self, request):
#         if request.method == "POST":
#             csv_file = request.FILES["csv_file"]
#             reader = csv.reader(csv_file)
#             self.message_user(request, "Your csv file has been exported")
#             return redirect("..")
        # form = CsvImportForm()
        # payload = {"form": form}
        # return render(request, "admin/csv_form.hmtl", payload)

admin.site.register(ShopUser)
admin.site.register(Vendor)