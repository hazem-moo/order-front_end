/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL!;
const API_TOKEN = process.env.STRAPI_TOKEN!;

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const res = await axios.delete(`${STRAPI_URL}/api/orders/${params.id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
