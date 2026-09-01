import mongoose, { Schema } from "mongoose";

interface IPayment {
  orderId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;

  amount: number;

  method: "Kpay" | "WavePay" | "PAYPAL";

  status: "PENDING" | "PAID" | "FAILED" | "REFUNDED";

  transactionId?: string;
}

const paymentSchema = new Schema<IPayment>(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    method: {
      type: String,
      enum: ["COD", "CARD", "PAYPAL"],
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
      default: "PENDING",
    },

    transactionId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model<IPayment>("Payment",paymentSchema);