from django.shortcuts import render

# Create your views here.
def about_page(request):
    """Render the About page"""
    return render(request, 'aboutus/about.html')
