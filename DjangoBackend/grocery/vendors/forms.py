from django import forms
from . import models


class VendorForm(forms.ModelForm):
    """Model form of vendor for password hashmap """
    password=forms.CharField()
    
    class Meta:
        model=models.Vendor
        fields='__all__'
        widgets = {
            'password': forms.PasswordInput()
         }
        
