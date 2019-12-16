from django.db import transaction
from rest_framework import serializers

from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"

    def validate(self, data):
        type = data.get("type")

        # check debit transactions, avoid a negative account balance
        if type == Transaction.DEBIT_TRANSACTION:
            amount = data.get("amount")
            with transaction.atomic():
                balance = Transaction.get_balance()
                if balance - amount < 0:
                    raise serializers.ValidationError(
                        "Invalid debit transaction, the account balance cannot be a negative value."
                    )

        return data
