import { NextRequest, NextResponse } from 'next/server';
import { getDestination, getAllDestinations, searchDestinations } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const search = searchParams.get('search');

  try {
    // Get specific destination by slug
    if (slug) {
      const destination = await getDestination(slug);
      if (!destination) {
        return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
      }
      return NextResponse.json(destination);
    }

    // Search destinations
    if (search) {
      const destinations = await searchDestinations(search);
      return NextResponse.json(destinations);
    }

    // Get all destinations
    const destinations = await getAllDestinations();
    return NextResponse.json(destinations);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
