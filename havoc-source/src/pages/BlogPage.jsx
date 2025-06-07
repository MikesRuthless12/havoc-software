import { useState } from 'react';
import { Search, Calendar, User, Tag } from 'lucide-react';
import havocLogo from '../assets/havoc-logo.png';

const BlogPage = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Introducing Copy That 1.0: A New Era in File Management',
      date: 'June 5, 2025',
      excerpt: "We're excited to announce the release of our flagship product, Copy That 1.0. This powerful file management utility is designed to streamline your workflow and boost productivity with intelligent file organization, lightning-fast transfers, and advanced automation capabilities.",
      author: 'Michael R.',
      category: 'Product Updates',
      readTime: '5 min read',
      tags: ['Copy That', 'Product Launch', 'File Management']
    },
    {
      id: 2,
      title: '7 Essential Tips for Efficient File Management in 2025',
      date: 'May 25, 2025',
      excerpt: 'Discover how to organize your digital files effectively with these proven strategies. Learn how Copy That can help you implement these best practices and save hours every week through smart file organization techniques and automation.',
      author: 'John S.',
      category: 'Tips & Tutorials',
      readTime: '8 min read',
      tags: ['Productivity', 'Organization', 'Best Practices']
    },
    {
      id: 3,
      title: 'The Future of File Management Software: AI and Beyond',
      date: 'May 15, 2025',
      excerpt: 'Explore emerging trends in file management technology and how Havoc Software is positioning itself at the forefront of innovation in this space. From AI-powered file categorization to predictive file access, the future of file management is smarter than ever.',
      author: 'Alex J.',
      category: 'Industry Insights',
      readTime: '10 min read',
      tags: ['AI', 'Future Tech', 'Innovation']
    },
    {
      id: 4,
      title: 'Case Study: How TechCorp Improved Efficiency by 40% with Copy That Pro',
      date: 'May 5, 2025',
      excerpt: 'Learn how one of our enterprise customers transformed their file management processes and achieved significant productivity gains using Copy That Pro. This detailed case study includes implementation strategies, challenges overcome, and measurable results.',
      author: 'Maria G.',
      category: 'Case Studies',
      readTime: '12 min read',
      tags: ['Enterprise', 'Success Story', 'ROI']
    },
    {
      id: 5,
      title: 'Sneak Peek: Upcoming Features in Copy That 1.1',
      date: 'April 28, 2025',
      excerpt: "Get a sneak peek at the exciting new features we're developing for the next version of Copy That. From enhanced cloud integration to advanced batch processing capabilities, version 1.1 will take file management to the next level. Beta testers wanted!",
      author: 'Michael R.',
      category: 'Product Updates',
      readTime: '6 min read',
      tags: ['Beta Testing', 'Coming Soon', 'Feature Preview']
    },
    {
      id: 6,
      title: 'How to Automate Your File Backup Strategy with Copy That Pro',
      date: 'April 15, 2025',
      excerpt: "Never worry about losing important files again. This comprehensive guide walks you through setting up an automated backup strategy using Copy That Pro's powerful scheduling and verification features. Includes sample scripts and configuration templates.",
      author: 'David K.',
      category: 'Tips & Tutorials',
      readTime: '9 min read',
      tags: ['Backup', 'Automation', 'Data Protection']
    }
  ];

  // Categories for filter
  const categories = ['All', 'Product Updates', 'Tips & Tutorials', 'Industry Insights', 'Case Studies'];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Recent posts for sidebar (top 3 most recent)
  const recentPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 3);

  // Popular tags
  const popularTags = ['Copy That', 'Productivity', 'File Management', 'Automation', 'Best Practices'];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-8">
        <img src={havocLogo} alt="Havoc Software Logo" className="h-16 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Stay updated with the latest news, tips, and insights from Havoc Software.
          Discover how to get the most out of our products and stay ahead in file management.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-8">
        {/* Main content - Blog posts */}
        <div className="md:w-3/4 space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="border border-gray-300 rounded-lg p-6 transition-all hover:shadow-md"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User size={16} />
                    <span>By {post.author}</span>
                  </div>
                  <button className="text-black font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">No posts found matching your criteria.</p>
              <button 
                className="mt-4 text-black hover:underline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:w-1/4 space-y-6">
          {/* Search */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full border border-gray-300 rounded p-2 pr-8 focus:outline-none focus:ring-1 focus:ring-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Categories */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button 
                    className={`hover:text-gray-600 hover:underline ${selectedCategory === category ? 'font-semibold' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-3">
              {recentPosts.map((post) => (
                <li key={post.id} className="border-b border-gray-200 pb-2 last:border-0">
                  <button className="text-sm hover:text-gray-600 hover:underline text-left">
                    {post.title}
                  </button>
                  <div className="text-xs text-gray-500 mt-1">{post.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded border border-gray-200 hover:bg-gray-200 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

