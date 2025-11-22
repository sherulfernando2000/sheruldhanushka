export default function HeroBanner() {
    return (
        <div
            className="rounded-lg relative overflow-hidden flex px-6 md:px-12 group"
            style={{ minHeight: '80vh' }}
        >
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000 ease-in-out group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="https://youtu.be/9vntypeV5QU?si=BHveGaDyIsmcLRuH" type="video/mp4" />
                {/* Fallback to image if video doesn't load */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
                ></div>
            </video>

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
            
            {/* Animated Light Streaks */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
                <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse delay-1000"></div>
                <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-2000"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + i * 0.5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 lg:pl-20 lg:pt-50 text-white max-w-3xl">
                {/* Animated Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-proxima font-medium">Trusted by 500+ Companies</span>
                </div>

                <h1 className="text-4xl font-cormorant md:text-6xl font-bold leading-tight mb-6 animate-slide-up">
                    Building the Future of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white animate-gradient">
                        Digital Innovation
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 font-family-proxima font-light leading-relaxed animate-slide-up delay-200">
                    We craft scalable, cloud-ready, and intelligent software solutions that empower
                    businesses to innovate, transform, and thrive in the digital era.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                    <button className="group/btn bg-primary hover:bg-primary/90 text-white font-family-proxima font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden">
                        <span className="relative z-10">Explore Our Solutions</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </button>
                    
                    <button className="group/btn border-2 border-white hover:bg-white hover:text-black font-family-proxima font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                        <span className="relative z-10">Talk to Our Experts</span>
                        <div className="absolute inset-0 bg-white scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>

                {/* Stats Section */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up delay-400">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">15+</div>
                        <div className="text-sm text-white/70 font-proxima">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">500+</div>
                        <div className="text-sm text-white/70 font-proxima">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">99%</div>
                        <div className="text-sm text-white/70 font-proxima">Client Satisfaction</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="flex flex-col items-center space-y-2 text-white/70">
                    <span className="font-proxima text-xs">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
