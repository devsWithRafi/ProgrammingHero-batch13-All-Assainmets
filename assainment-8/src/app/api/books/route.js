import { NextResponse } from 'next/server';
import books from '@/assets/data/booksData.json';

export async function GET() {
  if (books) {
    return NextResponse.json({
      status: 200,
      success: true,
      data: books,
    });
  } else {
    return NextResponse.json({
      status: 404,
      success: false,
      data: [],
    });
  }
}
