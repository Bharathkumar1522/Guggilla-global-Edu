import React, { forwardRef } from 'react';

const LoadingScreen = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
      className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated logo */}
        <div className="relative mb-8">
          <div className="animate-pulse">
            <img 
              src="/logo rg.pdf" 
              alt="Guggilla Global Education Logo"
              className="h-16 w-auto mx-auto mb-4"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="hidden">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">GG</span>
              </div>
            </div>
          </div>
          
          {/* Spinning rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-blue-100 border-b-blue-300 rounded-full animate-spin-reverse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-secondary-900">
            Guggilla Global Education
          </h2>
          <p className="text-secondary-600 animate-pulse">
            Preparing your journey...
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;