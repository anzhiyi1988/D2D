# Generated by Django 2.2.5 on 2019-09-20 14:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Module',
            fields=[
                ('c_id', models.CharField(max_length=32, primary_key=True, serialize=False)),
                ('c_name', models.CharField(max_length=300)),
                ('c_url', models.CharField(max_length=900)),
                ('dt_updatetime', models.DateField(auto_now_add=True)),
                ('c_pid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='config.Module')),
            ],
        ),
    ]
