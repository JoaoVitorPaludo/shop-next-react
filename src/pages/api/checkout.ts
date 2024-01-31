import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  if (!priceId) {
    return res.status(400).json({
      error: "priceId not found.",
    });
  }
  const sucessUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}

// const users = [
//   {
//     id: "1",
//     name: "teste",
//   },
//   {
//     id: "2",
//     name: "teste2",
//   },
// ];
// export default function postReq(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.headers;
//   const user = users.find((user) => user.id === id);
//   if (!user) {
//     return res.status(400).json({ error: "Usuário não encontrado" });
//   }
//   return res.status(200).json(user);
// }
