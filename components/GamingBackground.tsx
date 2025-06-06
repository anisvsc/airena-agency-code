// components/GlowingBackground.tsx
const GamingBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
      {/* Top Left Glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-900 opacity-40 blur-2xl rounded-full" />

      {/* Top Right Glow */}
      <div className="absolute top-10 right-28 w-32 h-32 bg-emerald-600 opacity-55 blur-2xl rounded-full" />

      <div className="absolute top-120 right-10 w-32 h-32 bg-emerald-300 opacity-55 blur-3xl rounded-full" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-5/12 w-72 h-72 bg-emerald-600 opacity-20 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-6/7 left-8/12 w-72 h-72 bg-emerald-400 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />

      {/* Bottom Left Glow */}
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-800 opacity-40 blur-2xl rounded-full" />

      {/* Small Dot Glow */}
      {/* <div className="absolute bottom-12 right-16 w-4 h-2 bg-emerald-500 opacity-70 rounded-full" /> */}
    </div>
  );
};

export default GamingBackground;
