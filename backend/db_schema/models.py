from django.db import models
from django.utils import timezone

class StampedModel(models.Model):
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(StampedModel, self).save(*args, **kwargs)

    class Meta:
        abstract = True
