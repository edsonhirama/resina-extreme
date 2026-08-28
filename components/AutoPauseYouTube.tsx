"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutoPauseYouTubeProps {
  videoId: string;
  title: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

export function AutoPauseYouTube({
  videoId,
  title,
  autoPlay = false,
  muted = true,
  loop = true,
  controls = true,
  className = "w-full h-full object-cover border-0",
}: AutoPauseYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sendCommand = (func: "playVideo" | "pauseVideo") => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: func, args: "" }),
          "*"
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is on screen
            if (autoPlay || hasInteracted) {
              sendCommand("playVideo");
            }
          } else {
            // Video is out of screen -> PAUSE automatically
            sendCommand("pauseVideo");
          }
        });
      },
      {
        threshold: 0.25, // Pauses when less than 25% is visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay, hasInteracted]);

  // Construct embed URL with enablejsapi=1
  const autoPlayParam = autoPlay ? 1 : 0;
  const muteParam = muted ? 1 : 0;
  const loopParam = loop ? 1 : 0;
  const controlsParam = controls ? 1 : 0;
  const playlistParam = loop ? `&playlist=${videoId}` : "";

  const srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=${autoPlayParam}&mute=${muteParam}&loop=${loopParam}${playlistParam}&controls=${controlsParam}&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onClick={() => setHasInteracted(true)}
    >
      <iframe
        ref={iframeRef}
        src={srcUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={className}
      />
    </div>
  );
}
