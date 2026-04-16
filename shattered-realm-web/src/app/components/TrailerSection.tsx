import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import trailerVideo from "../../assets/Shattered-Realm-Trailer.mp4";

export function TrailerSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (videoRef.current) {
      videoRef.current.currentTime = newProgress;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="trailer"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020a14 0%, #0a1528 50%, #020a14 100%)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-cyan-400 uppercase tracking-[0.3em] mb-3 block"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600 }}
          >
            Experience the Cinematic
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Official{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Trailer
            </span>
          </h2>
          <p
            className="text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Watch the story of humanity's last stand. See the realms, meet the heroes, and discover the corruption that threatens reality itself.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{
            boxShadow: "0 0 60px rgba(6, 182, 212, 0.15), inset 0 0 30px rgba(6, 182, 212, 0.05)",
          }}
        >
          {/* Video Player */}
          <div className="relative bg-black aspect-video">
            <video
              ref={videoRef}
              src={trailerVideo}
              className="w-full h-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Video Overlay Controls */}
            <div className="absolute inset-0 flex items-center justify-center group hover:bg-black/20 transition-colors duration-300">
              {/* Click-to-play/pause overlay */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause trailer" : "Play trailer"}
                className="absolute inset-0 flex items-center justify-center"
              >
                {!isPlaying && (
                  <motion.div
                    initial={false}
                    animate={{ scale: 1 }}
                    className="rounded-full p-6 bg-blue-600/80 hover:bg-blue-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={48} className="text-white ml-1" fill="white" />
                  </motion.div>
                )}
              </button>
            </div>

            {/* Bottom Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-gray-600 rounded-full cursor-pointer accent-blue-500 hover:h-2 transition-all"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                      duration ? (progress / duration) * 100 : 0
                    }%, #4b5563 ${duration ? (progress / duration) * 100 : 0}%, #4b5563 100%)`,
                  }}
                />
              </div>

              {/* Control Buttons Row */}
              <div className="flex items-center justify-between gap-4">
                {/* Left: Play/Pause and Time */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 hover:bg-white/20 rounded transition-colors"
                  >
                    {isPlaying ? (
                      <Pause size={20} className="text-white" />
                    ) : (
                      <Play size={20} className="text-white" />
                    )}
                  </button>
                  <div className="text-white text-sm flex gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
                    <span>{formatTime(progress)}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Right: Volume and Fullscreen */}
                <div className="flex items-center gap-3">
                  {/* Volume Control */}
                  <div className="flex items-center gap-2 group/volume">
                    <button
                      onClick={toggleMute}
                      className="p-2 hover:bg-white/20 rounded transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX size={20} className="text-white" />
                      ) : (
                        <Volume2 size={20} className="text-white" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-0 group-hover/volume:w-20 transition-all h-1 bg-gray-600 rounded-full cursor-pointer accent-blue-500"
                    />
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-white/20 rounded transition-colors"
                  >
                    <Maximize size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.6 }}>
            Ready to experience the corruption firsthand?
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-10 py-4 rounded-lg text-white text-center transition-all"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "16px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #06b6d4 0%, #2563eb 50%, #7c3aed 100%)",
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              letterSpacing: "0.05em",
            }}
          >
            Download & Play
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
