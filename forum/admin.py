from django.contrib import admin
from .models import Topic


class TopicAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


# Register your models here.
admin.site.register(Topic, TopicAdmin)
