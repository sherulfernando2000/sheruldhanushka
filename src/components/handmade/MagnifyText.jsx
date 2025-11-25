import { useState, useRef } from "react";

export default function MagnifyText({ text, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const textRef = useRef(null);

  const lensSize = 100;
  const zoomLevel = 1.6;

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Normal text */}
      <p 
        ref={textRef}
        className="mb-5 text-lg md:text-xl leading-relaxed text-white opacity-90 select-none"
      >
        {text}
      </p>

      {/* Magnifying glass effect */}
      {show && (
        <div
          className="absolute pointer-events-none z-50"
          style={{
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
          }}
        >
          {/* Glass circle with border and shadow */}
          <div
            className="absolute inset-0 rounded-full border-4 border-blue-600 shadow-2xl"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 2px 8px rgba(255,255,255,0.2)",
            }}
          />

          {/* Magnified text inside the circle */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              inset: '4px',
              clipPath: `circle(${(lensSize - 8) / 2}px at center)`,
            }}
          >
            <div
              className="absolute whitespace-pre-wrap"
              style={{
                left: -pos.x * zoomLevel + lensSize / 2,
                top: -pos.y * zoomLevel + lensSize / 2,
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top left',
                width: textRef.current ? `${textRef.current.offsetWidth}px` : 'auto',
              }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-white font-semibold">
                {text}
              </p>
            </div>
          </div>

          {/* Lens highlight effect */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "15%",
              left: "15%",
              width: "35%",
              height: "35%",
              background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </div>
      )}
    </div>
  );
}