import React, { useState } from "react";

const Blog = () => {
  const BLOG = [
    {
      date: "December 4, 2025",
      CardTitle: "How Livewire Makes Laravel Easier and How It Works",
      CardDescription: "When building websites with Laravel, you might want to make your website feel more modern and interactive",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*uTHpJEbyLMwEYC56KS5p_Q.png",
      url: "https://medium.com/@sherul.dhanushka/how-livewire-makes-laravel-easier-and-how-it-works-7ebfd159e107"
    },
    {
      date: "December 4, 2025",
      CardTitle: "Getting Started with Angular: A Developer’s Perspective",
      CardDescription: " Choosing the right framework can define how efficiently you build, scale, and maintain web applications",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*1UVuedZsgSfDfmc6Ff_M4w.png",
      url: "https://medium.com/@sherul.dhanushka/getting-started-with-angular-a-developers-perspective-d7c1ce2de5fd"
    },
    {
      date: "Jun 21, 2023",
      CardTitle: "Instagram Introduces a New Feature Allowing Users to Download Public Reels",
      CardDescription: "Instagram has recently rolled out an exciting update that grants users the ability to download public Reels.",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*aUlksHmlj_BJm4OO",
      url: "https://medium.com/@sherul.dhanushka/instagram-introduces-a-new-feature-allowing-users-to-download-public-reels-270546efe8b0"
    }
  ]


  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                My Blog News
              </h2>
              <p className="text-base text-gray-300">
                Documenting my growth, so others can grow too.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {BLOG.map((blog, index) =>
          (
            <BlogCard
              key={index}
              date={blog.date}
              CardTitle={blog.CardTitle}
              CardDescription={blog.CardDescription}
              image={blog.image}
              url={blog.url}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10">
      <div
        className="w-full group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mb-8 overflow-hidden rounded-2xl relative h-64">
          <img
            src={image}
            alt={CardTitle}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${isHovered ? 'scale-110 brightness-75' : 'scale-100 brightness-100'
              }`}
          />

          {/* Overlay effect */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`} />

          {/* Floating date badge */}
          {date && (
            <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}>
              <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                {date}
              </span>
            </div>
          )}

          {/* Read more button on hover */}
          <a
            key={CardTitle}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"

          >
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-xl">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>

        </div>

        <div className={`transition-all duration-500 ${isHovered ? 'translate-y-[-8px]' : 'translate-y-0'
          }`}>
          <h3>
            <span className={`mb-4 inline-block text-xl font-semibold text-white transition-colors duration-300 sm:text-2xl lg:text-xl xl:text-2xl ${isHovered ? 'text-blue-400' : ''
              }`}>
              {CardTitle}
            </span>
          </h3>
          <p className={`text-base text-gray-400 transition-all duration-300 ${isHovered ? 'text-gray-300' : ''
            }`}>
            {CardDescription}
          </p>

          {/* Animated underline */}
          <div className={`mt-4 h-1 bg-gradient-to-r from-blue-900 to-cyan-500 rounded-full transition-all duration-500 ${isHovered ? 'w-16' : 'w-0'
            }`} />
        </div>
      </div>
    </div>
  );
};