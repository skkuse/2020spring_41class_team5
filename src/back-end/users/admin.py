

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import UserCreationForm, UserChangeForm
from .models import User


# class UserInfoAdmin(UserAdmin):
#     add_form = UserCreationForm
#     form = UserChangeForm
#     model = UserInfo
#     list_display = ('email', 'name', 'gender',
#                     'address', 'age', 'height', 
#                     'weight')          

# admin.site.register(UserInfo, UserInfoAdmin)


class UserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = User
    list_display = ('email', 'is_staff', 'is_active',
                    'address', 'gender', 'healthState')
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(User, UserAdmin)
