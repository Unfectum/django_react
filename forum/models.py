from django.db import models


# Create your models here.

class Topic(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()

    def _str_(self):
        return self.title
