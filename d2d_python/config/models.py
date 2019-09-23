from django.db import models


# Create your models here.


class Model(models.Model):
    c_id = models.CharField(max_length=32, primary_key=True)
    c_name = models.CharField(max_length=300)
    c_url = models.CharField(max_length=900)
    c_pid = models.ForeignKey('self', on_delete=models.CASCADE)
    dt_updatetime = models.DateTimeField(auto_now_add=True)


class Module(models.Model):
    c_id = models.CharField(max_length=32, primary_key=True)
    c_name = models.CharField(max_length=300)
    c_url = models.CharField(max_length=900)
    c_pid = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    dt_updatetime = models.DateField(auto_now_add=True)
