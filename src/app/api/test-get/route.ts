import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse> {
  console.log('Test api GET handled.')
  return NextResponse.json({ success: true })
}
