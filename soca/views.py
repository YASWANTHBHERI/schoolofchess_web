from django.shortcuts import render
from .models import Gallery
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponseRedirect

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def gallery(request):
    images = Gallery.objects.all()

    context = {
        'images': images,
    }
 
    return render(request, 'gallery.html',context)

def contact(request):
    if request.method == 'POST':
        firstname = request.POST.get('firstname', '')
        lastname = request.POST.get('lastname', '')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        message = request.POST.get('message', '')

        # Save the contact form data to the database or perform any other desired action

        # Send email
        send_mail(
            'Website Contact Form Submission',
            f'Name: {firstname} {lastname}\nEmail: {email}\nPhone: {phone}\n\n{message}',
            settings.DEFAULT_FROM_EMAIL,
            ['schoolofchesss@gmail.com'],
            fail_silently=False,
        )
        return HttpResponseRedirect('/contact/')  # Redirect to a current page

    return render(request, 'contact.html')

