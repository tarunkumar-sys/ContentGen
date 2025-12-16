import { 
  FileText, 
  Youtube, 
  Edit3, 
  Smile, 
  Instagram, 
  Linkedin, 
  Search, 
  Home, 
  ShoppingCart, 
  Mail, 
  MapPin,
  BarChart3,
  Lightbulb
} from "lucide-react";

export const contentTemplates = [
  // Enhanced Blog Tools
  {
    name: 'SEO-Optimized Blog Post',
    desc: 'Create comprehensive blog posts with built-in SEO analysis and optimization',
    category: 'Blog',
    icon: FileText,
    aiPrompt: 'Generate a complete SEO-optimized blog post with the following structure: engaging introduction, properly structured headings, keyword integration, internal linking suggestions, and compelling conclusion. Include meta description and focus keyword. Return in rich text format with SEO score indicators.',
    slug: 'seo-blog-post',
    form: [
      {
        label: 'Primary Topic/Keyword',
        field: 'input',
        name: 'keyword',
        required: true,
        placeholder: 'e.g., content marketing strategies'
      },
      {
        label: 'Target Audience',
        field: 'select',
        name: 'audience',
        options: ['General', 'B2B', 'B2C', 'Technical', 'Beginners', 'Experts'],
        required: true
      },
    ]
  },
  
  // Industry-Specific Templates
  {
    name: 'Real Estate Property Description',
    desc: 'Create compelling property descriptions that highlight features and attract buyers',
    category: 'Industry Specific',
    icon: Home,
    aiPrompt: 'Generate an engaging real estate property description that emphasizes key features, creates emotional appeal, and includes persuasive language for potential buyers. Include amenities, neighborhood benefits, and a call-to-action.',
    slug: 'real-estate-description',
    form: [
      {
        label: 'Property Type',
        field: 'select',
        name: 'propertyType',
        options: ['Single Family Home', 'Apartment/Condo', 'Commercial', 'Land', 'Luxury Home'],
        required: true
      },
      {
        label: 'Key Features',
        field: 'textarea',
        name: 'features',
        required: true,
        placeholder: 'e.g., 3 bedrooms, renovated kitchen, waterfront, etc.'
      },
    ]
  },
  
  // Multi-Platform Content
  {
    name: 'Content Repurposing Suite',
    desc: 'Transform long-form content into multiple platform-specific formats',
    category: 'Multi-Platform',
    icon: BarChart3,
    aiPrompt: 'Take the provided long-form content and create: 1) A Twitter thread outline with 5-7 tweets, 2) A LinkedIn article summary, 3) 3 Instagram captions of varying lengths, 4) 5 bullet points for a newsletter, and 5) A short video script concept. Format each section clearly.',
    slug: 'content-repurposing',
    form: [
      {
        label: 'Paste Your Long-Form Content',
        field: 'textarea',
        name: 'content',
        required: true
      },
      {
        label: 'Primary Platforms',
        field: 'checkbox',
        name: 'platforms',
        options: ['Twitter', 'LinkedIn', 'Instagram', 'Facebook', 'YouTube', 'Newsletter'],
        required: true
      }
    ]
  },
  
  // E-commerce Templates
  {
    name: 'Product Description Generator',
    desc: 'Create persuasive product descriptions that convert visitors to buyers',
    category: 'E-commerce',
    icon: ShoppingCart,
    aiPrompt: 'Generate a compelling product description that highlights benefits (not just features), addresses customer pain points, includes persuasive language, and incorporates SEO best practices. Structure with scannable sections and include a compelling call-to-action.',
    slug: 'product-description',
    form: [
      {
        label: 'Product Name',
        field: 'input',
        name: 'productName',
        required: true
      },
      {
        label: 'Key Features/Benefits',
        field: 'textarea',
        name: 'features',
        required: true,
        placeholder: 'List the main features and how they benefit the customer'
      },
    ]
  },
  
  // Advanced SEO Tools
  {
    name: 'Keyword Cluster Content',
    desc: 'Create comprehensive content covering a cluster of related keywords',
    category: 'SEO Tools',
    icon: Search,
    aiPrompt: 'Generate a comprehensive article that naturally incorporates the following primary keyword and related secondary keywords. Structure content to cover all aspects of the topic while maintaining natural keyword density and reader engagement.',
    slug: 'keyword-cluster-content',
    form: [
      {
        label: 'Primary Keyword',
        field: 'input',
        name: 'primaryKeyword',
        required: true
      },
      {
        label: 'Content Depth',
        field: 'select',
        name: 'depth',
        options: ['Basic Overview', 'Comprehensive Guide', 'Expert Deep Dive']
      }
    ]
  },
  
  // Email Marketing Templates
  {
    name: 'Email Sequence Generator',
    desc: 'Create a complete email marketing sequence for onboarding or nurturing',
    category: 'Email Marketing',
    icon: Mail,
    aiPrompt: 'Generate a complete email sequence including: 1) Welcome email, 2) Educational content email, 3) Value proposition email, 4) Social proof email, and 5) Call-to-action email. Ensure consistent tone and gradual building of relationship.',
    slug: 'email-sequence',
    form: [
      {
        label: 'Sequence Purpose',
        field: 'select',
        name: 'purpose',
        options: ['Welcome Series', 'Product Onboarding', 'Lead Nurturing', 'Re-engagement', 'Sales Sequence'],
        required: true
      },
      {
        label: 'Target Audience',
        field: 'input',
        name: 'audience',
        placeholder: 'Describe who will receive these emails'
      },
      {
        label: 'Key Messages',
        field: 'textarea',
        name: 'messages',
        placeholder: 'What are the main points you want to communicate?'
      }
    ]
  },
  
  // Local Business Templates
  {
    name: 'Local SEO Content Pack',
    desc: 'Generate localized content for better Google Business Profile visibility',
    category: 'Local SEO',
    icon: MapPin,
    aiPrompt: 'Create localized content including: 1) Business description optimized for local SEO, 2) Three Google Posts variations, 3) Response templates for common reviews, and 4) FAQ section addressing local customer concerns. Incorporate location-specific keywords naturally.',
    slug: 'local-seo-content',
    form: [
      {
        label: 'Business Type',
        field: 'input',
        name: 'businessType',
        required: true,
        placeholder: 'e.g., Italian restaurant, dental clinic, hair salon'
      },
      {
        label: 'Location/City',
        field: 'input',
        name: 'location',
        required: true
      },
    ]
  },
  
  // Original templates updated with Lucide icons
  {
    name: 'Blog Title',
    desc: 'Generate compelling blog titles based on your niche and outline.',
    category: 'Blog',
    icon: FileText,
    aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the given niche and outline. Return the output in rich text editor format.',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'Instantly generate trending blog topic ideas based on your niche.',
    category: 'Blog',
    icon: Lightbulb,
    aiPrompt: 'Generate top 5 blog topic ideas in bullet point format based on the provided niche and outline. Return the output in rich text editor format.',
    slug: 'blog-topic-idea',
    form: [
      {
        label: 'Enter your niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'YouTube SEO Title',
    desc: 'Generate 5 high-ranking, SEO-optimized titles for YouTube videos.',
    category: 'YouTube Tools',
    icon: Youtube,
    aiPrompt: 'Generate the best SEO-optimized YouTube video titles (5 variations) based on the provided keyword and outline. Return the output in rich text editor format.',
    slug: 'youtube-seo-title',
    form: [
      {
        label: 'Enter your YouTube video topic/keyword',
        field: 'input',
        name: 'keyword',
        required: true,
      },
      {
        label: 'Enter YouTube description outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'Rewrite Article (Plagiarism-Free)',
    desc: 'Rewrite any text to be unique and plagiarism-free with improved readability.',
    category: 'Writing Tools',
    icon: Edit3,
    aiPrompt: 'Rewrite the given article to make it 100% plagiarism-free while preserving its core meaning. Return the output in rich text editor format.',
    slug: 'rewrite-article',
    form: [
      {
        label: 'Paste your original content here',
        field: 'textarea',
        name: 'originalText',
        required: true,
      }
    ]
  },
  {
    name: 'Add Emojis to Text',
    desc: 'Make your message pop by auto-adding relevant emojis to any text.',
    category: 'Fun Tools',
    icon: Smile,
    aiPrompt: 'Add appropriate emojis to the following text to make it more engaging, keeping the original context. Return in rich text format.',
    slug: 'emoji-text-generator',
    form: [
      {
        label: 'Enter your text',
        field: 'textarea',
        name: 'text',
        required: true,
      }
    ]
  },
  {
    name: 'Instagram Post Generator',
    desc: 'Generate aesthetic Instagram captions with hashtags and emoji support.',
    category: 'Social Media Tools',
    icon: Instagram,
    aiPrompt: 'Create a short, engaging Instagram post based on the given content idea, with hashtags and emojis. Return in rich text format.',
    slug: 'instagram-post-generator',
    form: [
      {
        label: 'Enter your post idea or theme',
        field: 'textarea',
        name: 'postIdea',
        required: true,
      }
    ]
  },
  {
    name: 'LinkedIn Caption Generator',
    desc: 'Craft a professional and engaging caption tailored for LinkedIn.',
    category: 'Social Media Tools',
    icon: Linkedin,
    aiPrompt: 'Generate a professional LinkedIn post caption based on the given message or topic. Maintain a formal tone and avoid informal emojis. Return in rich text format.',
    slug: 'linkedin-caption-generator',
    form: [
      {
        label: 'Enter your message or idea',
        field: 'textarea',
        name: 'postIdea',
        required: true,
      }
    ]
  }
];