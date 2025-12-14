'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface GuideHeroProps {
  title: string
  country: string | null
  flag: string | null
  videoUrl: string | null
  imageUrl: string | null
  imageAlt: string | null
  targetKeyword?: string | null
}

export function GuideHero({ title, country, flag, videoUrl, imageUrl, imageAlt, targetKeyword }: GuideHeroProps) {
  // Generate SEO-friendly alt text
  const seoAlt = imageAlt ||
    (targetKeyword ? `${targetKeyword.replace(/-/g, ' ')} - ${country} landscape` : null) ||
    `Moving to ${country} - aerial view of ${country} landscape`
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked - show image instead
        setVideoError(true)
      })
    }
  }, [videoUrl])

  const showVideo = videoUrl && !videoError
  const hasMedia = videoUrl || imageUrl

  return (
    <header className="relative pt-16 min-h-[450px] md:min-h-[550px] overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <>
            {/* Video Background */}
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Poster/fallback image while video loads */}
            {!isVideoLoaded && imageUrl && (
              <Image
                src={imageUrl}
                alt={seoAlt}
                title={`Guide to ${targetKeyword?.replace(/-/g, ' ') || `moving to ${country}`}`}
                fill
                className="object-cover"
                priority
              />
            )}
          </>
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={seoAlt}
            title={`Guide to ${targetKeyword?.replace(/-/g, ' ') || `moving to ${country}`}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-100 to-amber-50" />
        )}

        {/* Gradient Overlays - adjusted for better media visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          {/* Country Badge */}
          {country && (
            <div className="flex items-center gap-3 mb-6">
              {flag && <span className="text-5xl drop-shadow-lg">{flag}</span>}
              <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-bold shadow-lg shadow-amber-500/30">
                Country Guide
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            <span className="drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              {title}
            </span>
          </h1>

          {/* Media Attribution */}
          {hasMedia && (
            <p className="mt-8 text-sm text-gray-600">
              {showVideo ? 'Video' : 'Photo'} from{' '}
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 font-medium"
              >
                Pexels
              </a>
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
