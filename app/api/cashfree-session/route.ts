import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { orderId, orderAmount, customerEmail, customerPhone } =
      await req.json();
    console.log("here");
    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_CLIENT_ID!,
        "x-client-secret":
          process.env.CASHFREE_CLIENT_SECRET!,
        "x-api-version": "2022-09-01",
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: orderAmount,
        order_currency: "INR",
        customer_details: {
          customer_email: customerEmail,
          customer_phone: customerPhone,
          customer_id: "12345677",
        },
        order_meta: {
          return_url: "https://airena.app/", // Optional
        },
      }),
    });

    const data = await response.json();
    console.log(data);
    return NextResponse.json(
      { paymentSessionId: data.payment_session_id },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "An Error " + e },
      {
        status: 404,
      }
    );
  }
}
