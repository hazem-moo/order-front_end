/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL!;
const API_TOKEN = process.env.STRAPI_TOKEN!;

export async function GET() {
  try {
    const res = await axios.get(`${STRAPI_URL}/api/orders?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return NextResponse.json(res.data.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await axios.post(`${STRAPI_URL}/api/orders`, body, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
