import { formSchema } from "@/components/form/form-example-schema";

export async function POST(request: Request) {
  const body = await request.json();

  // Validate the request body using the formSchema
  const { firstName, email } = await formSchema.parseAsync(body);

  // Perform any necessary business logic or data processing

  const baseId = "appuVe2NIfMi8gy0c";
  const tableIdOrName = "tbl0yNuque5jmcmuQ";
  const result = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { firstName, email } }),
    }
  );

  console.log("Result from Airtable", result);

  if (result.ok) {
    return Response.json({ message: "ok" });
  }

  return Response.json({
    message: "Une ereur est survenue  lors de l'envoi des données",
  });
}
