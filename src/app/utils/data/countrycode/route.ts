import { countrycodes } from "./data";

export async function GET() {
  return Response.json(countrycodes);
}
