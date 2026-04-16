import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia' as any, // Heeding Next.js rules if applicable, but using a stable version
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('API Request - Full Body:', JSON.stringify(body, null, 2));
    const { items, success_url, cancel_url, email, user_id, shippingInfo } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'カートが空です。' }, { status: 400 });
    }

    const line_items = items.map((item: any) => {
      return {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(Number(item.price)),
        },
        quantity: Math.max(1, Number(item.quantity)),
      };
    });

    console.log('Stripe Line Items:', JSON.stringify(line_items, null, 2));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url,
      cancel_url,
      customer_email: email || undefined,
      metadata: {
        user_id: user_id || 'guest',
        customer_email: email || '',
        shipping_name: shippingInfo?.name || '',
        shipping_zip: shippingInfo?.zip || '',
        shipping_pref: shippingInfo?.prefecture || '',
        shipping_address: `${shippingInfo?.address || ''} ${shippingInfo?.building || ''}`.trim(),
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Error:', err);
    // Stripeからの詳細なエラーメッセージを返す
    return NextResponse.json({ 
      error: err.message || '予期せぬエラーが発生しました。',
      code: err.code,
      param: err.param
    }, { status: 500 });
  }
}
