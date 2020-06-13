from django.db import models


# Create your models here.

class UserInfo(models.Model):
    name = models.CharField(default="TBD", max_length=100)
    gender = models.CharField(default="TBD", max_length=100)
    address = models.CharField(default="TBD", max_length=100)
    age = models.IntegerField(default = 0)
    height = models.IntegerField(default = 0)
    weight = models.IntegerField(default = 0)
    egg = models.BooleanField(default = False)
    milk = models.BooleanField(default = False)
    soybean = models.BooleanField(default = False)
    peanut = models.BooleanField(default = False)
    crab = models.BooleanField(default = False)
    shrimp = models.BooleanField(default = False)
    mackerel = models.BooleanField(default = False)
    apple = models.BooleanField(default = False)
    peach = models.BooleanField(default = False)
    kiwi = models.BooleanField(default = False)

    def __str__(self):
        return self.name

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False, **kwargs):
#     if created:
#         Token.objects.create(userinfo=instance)