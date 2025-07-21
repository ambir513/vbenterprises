"use client";

export default function SpotifyAlbumEmbed() {
  return (
    <div className="w-full flex justify-center">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px", border: "none" }} // remove border with CSS
        src="https://open.spotify.com/embed/album/1R34FPrGkG7Q0vDJ9xCfrF?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
