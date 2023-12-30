import { NextResponse } from 'next/server'

export async function POST(): Promise<NextResponse> {
  console.log('Test api POST handled.')
  return NextResponse.json({ success: true })
}
