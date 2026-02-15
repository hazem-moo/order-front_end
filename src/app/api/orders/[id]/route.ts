/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL!;
const API_TOKEN = process.env.STRAPI_TOKEN!;

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const res = await axios.delete(`${STRAPI_URL}/api/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
