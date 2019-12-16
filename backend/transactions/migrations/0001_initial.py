# Generated by Django 3.0 on 2019-12-16 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('CREDIT', 'Credit'), ('DEBIT', 'Debit')], max_length=64)),
                ('amount', models.FloatField()),
                ('effective_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
