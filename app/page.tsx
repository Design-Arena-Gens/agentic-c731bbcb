'use client'

import { useState } from 'react'

export default function Home() {
  const [total, setTotal] = useState(0)
  const [videos, setVideos] = useState<{ id: number; name: string }[]>([])

  const addVideo = () => {
    const newVideo = {
      id: Date.now(),
      name: `video_${Date.now()}.mp4`
    }
    setVideos([newVideo, ...videos])
    setTotal(total + 1)
  }

  const deleteVideo = () => {
    if (videos.length > 0) {
      setVideos(videos.slice(1))
      setTotal(Math.max(0, total - 1))
    }
  }

  return (
    <div className="p-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="glass p-5 rounded-xl mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Video Factory</h1>
          <span className="text-green-400 text-sm">● ACTIVE</span>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="glass p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Total Videos</p>
            <p className="text-2xl font-bold">{total}</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Status</p>
            <p className="text-green-400">Running</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Mode</p>
            <p>Personal</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={addVideo}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ➕ Add Video
          </button>
          <button
            onClick={deleteVideo}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            ❌ Delete Video
          </button>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="glass rounded-lg p-3">
              <div className="h-32 bg-slate-800 flex items-center justify-center rounded">
                🎬
              </div>
              <p className="mt-2 text-sm text-gray-300">
                {video.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
