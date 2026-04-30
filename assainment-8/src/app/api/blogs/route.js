import { NextResponse } from 'next/server';
import blogs from '@/assets/data/blogData.json';

export async function GET() {
  if (blogs) {
    return NextResponse.json({
      status: 200,
      success: true,
      data: blogs,
    });
  } else {
    return NextResponse.json({
      status: 404,
      success: false,
      data: [],
    });
  }
}
