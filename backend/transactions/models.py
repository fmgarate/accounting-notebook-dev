from django.db import models
from django.db.models import Sum


class Transaction(models.Model):
    """
    Account notebook transactions model.
    Defines the transactions data model
    """

    CREDIT_TRANSACTION = "CREDIT"
    DEBIT_TRANSACTION = "DEBIT"
    TRANSACTION_TYPE_CHOICES = (
        (CREDIT_TRANSACTION, "Credit"),
        (DEBIT_TRANSACTION, "Debit"),
    )

    type = models.CharField(
        max_length=64,
        choices=TRANSACTION_TYPE_CHOICES
    )

    amount = models.FloatField()
    effective_date = models.DateTimeField(auto_now_add=True)

    @classmethod
    def get_balance(cls):
        """
        Returns the current account balance
        """
        credit = cls.objects.filter(type=Transaction.CREDIT_TRANSACTION).aggregate(credit=Sum("amount")).get("credit") or 0.0
        debit = cls.objects.filter(type=Transaction.DEBIT_TRANSACTION).aggregate(debit=Sum("amount")).get("debit") or 0.0
        return credit - debit
