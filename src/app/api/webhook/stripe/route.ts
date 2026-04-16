import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia' as any,
});

// Admin権限でDBに書き込むため、SERVICE_ROLE_KEYが理想ですが、
// 無い場合はひとまず決済成功のログと簡易な反映に留めるか、
// またはフロントエンドへのリダイレクト時に処理する手法も取れます。
// ここでは、Webhookによるサーバーサイドの確実な保存を実装します。
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string // 将来的には SERVICE_ROLE_KEY に変更推奨
);

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // 決済完了時のイベントハンドリング
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata;

    console.log('Payment successful for session:', session.id);
    console.log('Metadata:', metadata);

    // データベース（Supabase）への保存処理
    // user_orders テーブル等へ INSERT
    if (metadata) {
      const orderData = {
        stripe_session_id: session.id,
        user_id: metadata.user_id || null, // ゲストはnull
        customer_email: session.customer_details?.email || metadata.customer_email,
        total_amount: session.amount_total,
        status: 'paid',
        shipping_zip: metadata.shipping_zip,
        shipping_pref: metadata.shipping_pref,
        shipping_address: metadata.shipping_address,
        shipping_name: metadata.shipping_name,
      };

      const { data, error } = await supabaseAdmin
        .from('user_orders')
        .insert([orderData]);

      if (error) {
        console.error('Failed to save order to Supabase:', error);
        // Stripe側には200を返して再送を防ぐ（ログ監視で対応）
      } else {
        console.log('Order successfully saved to Supabase!');
      }
    }
  }

  return NextResponse.json({ received: true });
}
