from django.shortcuts import render

# Create your views here.

from .models import Module


def show_modules(request):
    modules = Module.objects.order_by('c_id')
    context = {'modules': modules}
    return render(request, 'config/modules.html', context)


def index(request):
    return render(request, 'config/index.html')
