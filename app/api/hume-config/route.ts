import { NextRequest, NextResponse } from 'next/server'

const HUME_CONFIG_ID = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || 'd0e862f0-20f7-487e-8ea4-f9cb11c0e6ca'

async function getHumeAccessToken(): Promise<string | null> {
  const apiKey = process.env.NEXT_PUBLIC_HUME_API_KEY || process.env.HUME_API_KEY
  const secretKey = process.env.HUME_SECRET_KEY

  if (!apiKey || !secretKey) {
    console.error('Hume credentials missing')
    return null
  }

  try {
    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: apiKey,
        client_secret: secretKey,
      }),
    })

    if (!response.ok) {
      console.error('Hume token error:', await response.text())
      return null
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('Hume token error:', error)
    return null
  }
}

// GET /api/hume-config - Get current EVI config details
export async function GET(request: NextRequest) {
  const action = request.nextUrl.searchParams.get('action') || 'config'

  const accessToken = await getHumeAccessToken()
  if (!accessToken) {
    return NextResponse.json({ error: 'Failed to get Hume access token' }, { status: 500 })
  }

  try {
    if (action === 'config') {
      // Get the specific config
      const response = await fetch(`https://api.hume.ai/v0/evi/configs/${HUME_CONFIG_ID}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Hume config fetch error:', error)
        return NextResponse.json({ error: 'Failed to fetch config', details: error }, { status: response.status })
      }

      const config = await response.json()
      return NextResponse.json(config)
    }

    if (action === 'tools') {
      // List all available tools
      const response = await fetch('https://api.hume.ai/v0/evi/tools', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Hume tools fetch error:', error)
        return NextResponse.json({ error: 'Failed to fetch tools', details: error }, { status: response.status })
      }

      const tools = await response.json()
      return NextResponse.json(tools)
    }

    if (action === 'prompts') {
      // List all prompts
      const response = await fetch('https://api.hume.ai/v0/evi/prompts', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Hume prompts fetch error:', error)
        return NextResponse.json({ error: 'Failed to fetch prompts', details: error }, { status: response.status })
      }

      const prompts = await response.json()
      return NextResponse.json(prompts)
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Hume API error:', error)
    return NextResponse.json({ error: 'API request failed', details: String(error) }, { status: 500 })
  }
}

// POST /api/hume-config - Create or update tools
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { action, toolData, promptData } = body

  const accessToken = await getHumeAccessToken()
  if (!accessToken) {
    return NextResponse.json({ error: 'Failed to get Hume access token' }, { status: 500 })
  }

  try {
    if (action === 'create-tool') {
      // Create a new custom tool
      const response = await fetch('https://api.hume.ai/v0/evi/tools', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(toolData)
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Hume tool create error:', error)
        return NextResponse.json({ error: 'Failed to create tool', details: error }, { status: response.status })
      }

      const tool = await response.json()
      return NextResponse.json(tool)
    }

    if (action === 'update-prompt') {
      // Update the system prompt
      const response = await fetch(`https://api.hume.ai/v0/evi/prompts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(promptData)
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Hume prompt update error:', error)
        return NextResponse.json({ error: 'Failed to update prompt', details: error }, { status: response.status })
      }

      const prompt = await response.json()
      return NextResponse.json(prompt)
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Hume API error:', error)
    return NextResponse.json({ error: 'API request failed', details: String(error) }, { status: 500 })
  }
}
