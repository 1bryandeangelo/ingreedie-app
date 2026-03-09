import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ingreedie – Cook What You Have, Waste Less';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #14532d 0%, #166534 40%, #15803d 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '80px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            display: 'flex',
          }}
        />

        {/* Leaf/ingredient icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
            fontSize: '40px',
          }}
        >
          🥗
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          ingreedie
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '30px',
            fontWeight: '400',
            color: 'rgba(255,255,255,0.80)',
            letterSpacing: '0.5px',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          Cook what you have. Waste less.
        </div>

        {/* Bottom URL badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '8px 20px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ade80',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: '500',
              display: 'flex',
            }}
          >
            ingreedie.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
