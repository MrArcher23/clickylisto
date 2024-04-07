import { steps } from "./data";

export async function GET() {
  return Response.json(steps);
}
