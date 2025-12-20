// Define the shape of a blog post object
// ⚠️ NOTE: jsonplaceholder posts DO NOT have `content` or `slug`
// They actually return: { id, title, body, userId }
type post = {
  title: string;      // Title of the post
  content: string;    // ❌ This field does NOT exist in the API response
  slug: number;       // Used as an identifier (maps to `id` in the API)
};

// Props type for a dynamic route page in Next.js App Router
// `params.slug` comes from the URL: /blog/[slug]
type BlogPostProps = {
  params: { slug: string };
};

// Async Server Component (default behavior in App Router)
const BlogPost = async ({ params }: BlogPostProps) => {
  // Extract the slug from route params
  // ❌ `params` is NOT a Promise, so `await` is unnecessary
  const { slug } = params;

  // Fetch a single post using the slug (treated as ID here)
  // ISR enabled: page will revalidate every 60 seconds
  const post: post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  // Log the fetched post on the server (visible in terminal, not browser)
  console.log(post);

  return (
    <div>
      {/* Render post title */}
      <h1>{post.title}</h1>

      {/* 
         This will be `undefined` because the API returns `body`, not `content`
         Should be: post.body
      */}
      <p>{post.content}</p>
    </div>
  );
};

// Export the page component as default
export default BlogPost;


 /*
  NOTES:
  1. The `generateStaticParams` function is responsible for creating paths dynamically for all blog posts.
     - It fetches data from an API and maps it to a list of `slug` values used for routing.
  2. The `BlogPost` component fetches a specific post's data based on the `slug`.
     - It uses Incremental Static Regeneration (ISR) to revalidate the content every 60 seconds.
  3. The external API (jsonplaceholder) doesn’t provide a `slug` field. You'll need to generate one manually or use an existing identifier like `id`.
  4. This code assumes a Next.js app structure (`app/blog/[slug]/page.tsx`).
     - `page.tsx` serves as the main entry point for the dynamic route.
  5. Error handling for API calls is missing and should be added to ensure graceful failures.
  6. If you're using `slug`, make sure it matches the format expected by the API and routing system.
  */

//   https://github.com/irohandev/WebDev-DevOps-Cohort-3.0/blob/main/Week-20%20NextJs%20Continuation/Day-1%20Next.js%20Continued/Lecture%20Codes/02_static_site_generation/app/blog/%5Bslug%5D/page.tsx
