// app/loading.tsx

export default function Loading() {
    return (
      <div className="relative flex items-center justify-center h-screen w-full">
        {/* Shadow overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Spinner */}
        <div className="relative z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      </div>
    );
  }
  