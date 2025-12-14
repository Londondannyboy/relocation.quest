import { redirect } from 'next/navigation'

// Redirect /guide to the guides index page
export default function GuideRedirect() {
  redirect('/guides')
}
