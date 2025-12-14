'use client'

import MuxPlayer from '@mux/mux-player-react'

interface ArticleVideoProps {
  playbackId: string
}

export function ArticleVideo({ playbackId }: ArticleVideoProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      autoPlay="muted"
      loop
      muted
      className="w-full aspect-video max-h-[70vh] object-cover [--controls:none]"
    />
  )
}
