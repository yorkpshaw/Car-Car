# Generated by Django 4.0.3 on 2022-10-26 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0009_alter_appointment_vin_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.TimeField(null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(null=True),
        ),
    ]