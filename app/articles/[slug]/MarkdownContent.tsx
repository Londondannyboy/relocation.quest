'use client'

import ReactMarkdown from 'react-markdown'

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-bold prose-headings:text-gray-900
      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-amber-500 prose-h2:pl-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
      prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-500
      prose-strong:text-amber-700 prose-strong:font-semibold
      prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-3
      prose-li:bg-amber-50 prose-li:border-l-2 prose-li:border-amber-500 prose-li:px-4 prose-li:py-3 prose-li:rounded-r-lg
      prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic
    ">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
