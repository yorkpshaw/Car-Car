# Generated by Django 4.0.3 on 2022-10-25 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_appointment_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='vin_customer',
            field=models.CharField(max_length=17),
        ),
    ]
