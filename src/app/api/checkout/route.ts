import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia' as any, // Heeding Next.js rules if applicable, but using a stable version
});

export async function POST(req: Request) {
  try {
    const { items, success_url, cancel_url } = await req.json();
    console.log('API Request - Items:', items?.length);

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'カートが空です。' }, { status: 400 });
    }

    const line_items = items.map((item: any) => {
      const images = [];
      if (item.image) {
        if (item.image.startsWith('http')) {
          images.push(item.image);
        } else if (process.env.NEXT_PUBLIC_BASE_URL) {
          images.push(`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`);
        }
      }

      return {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: item.name,
            ...(images.length > 0 ? { images } : {}),
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url,
      cancel_url,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
