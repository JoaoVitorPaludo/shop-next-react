import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: "Hello World!" });
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
