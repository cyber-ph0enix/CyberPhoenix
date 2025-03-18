const sampleBlogs = [
    {
        title: "The Future of AI in Blogging",
        createdAt: new Date("2025-03-10T12:30:00Z"),
        image: "https://example.com/images/ai-blogging.jpg",
        content:
            "AI is revolutionizing the blogging industry by enhancing content creation...",
        tags: ["AI", "Blogging", "Technology"],
    },
    {
        title: "How to Optimize Your Blog for SEO",
        createdAt: new Date("2025-03-11T08:15:00Z"),
        image: "https://example.com/images/seo-tips.jpg",
        content:
            "SEO optimization helps improve blog visibility on search engines...",
        tags: ["SEO", "Marketing", "Blogging"],
    },
    {
        title: "The Rise of Sustainable Fashion",
        createdAt: new Date("2025-03-12T14:45:00Z"),
        image: "https://example.com/images/sustainable-fashion.jpg",
        content:
            "Sustainable fashion is gaining popularity as consumers seek eco-friendly...",
        tags: ["Fashion", "Sustainability", "Trends"],
    },
    {
        title: "Mastering JavaScript for Web Development",
        createdAt: new Date("2025-03-13T10:00:00Z"),
        image: "https://example.com/images/js-webdev.jpg",
        content:
            "JavaScript is a powerful tool for building dynamic web applications...",
        tags: ["JavaScript", "Web Development", "Coding"],
    },
    {
        title: "Understanding MongoDB Atlas",
        createdAt: new Date("2025-03-14T09:20:00Z"),
        image: "https://example.com/images/mongodb-atlas.jpg",
        content:
            "MongoDB Atlas provides a cloud-based solution for scalable databases...",
        tags: ["MongoDB", "Database", "Cloud"],
    },
    {
        title: "Why GSAP is a Game Changer for Animations",
        createdAt: new Date("2025-03-15T11:10:00Z"),
        image: "https://example.com/images/gsap-animations.jpg",
        content: "GSAP makes animations smoother and more performant...",
        tags: ["GSAP", "Animations", "Web Design"],
    },
    {
        title: "MERN Stack Development for Beginners",
        createdAt: new Date("2025-03-16T15:45:00Z"),
        image: "https://example.com/images/mern-stack.jpg",
        content:
            "The MERN stack (MongoDB, Express, React, Node.js) is a powerful...",
        tags: ["MERN", "Full Stack", "Development"],
    },
    {
        title: "The Role of AR in Online Retail",
        createdAt: new Date("2025-03-17T13:30:00Z"),
        image: "https://example.com/images/ar-retail.jpg",
        content:
            "Augmented reality is transforming the e-commerce experience...",
        tags: ["AR", "E-commerce", "Retail"],
    },
    {
        title: "Top 10 Blogging Tools in 2025",
        createdAt: new Date("2025-03-18T08:00:00Z"),
        image: "https://example.com/images/blogging-tools.jpg",
        content:
            "Bloggers have access to a variety of tools that streamline content creation...",
        tags: ["Blogging", "Tools", "Productivity"],
    },
    {
        title: "How Data Insights Improve Retail Growth",
        createdAt: new Date("2025-03-19T12:00:00Z"),
        image: "https://example.com/images/data-retail.jpg",
        content:
            "Leveraging data analytics can drive retail growth and enhance customer...",
        tags: ["Data", "Retail", "Growth"],
    },
    {
        title: "Building Scalable Apps with Node.js",
        createdAt: new Date("2025-03-20T10:15:00Z"),
        image: "https://example.com/images/nodejs-scalability.jpg",
        content:
            "Node.js provides an efficient runtime for handling multiple requests...",
        tags: ["Node.js", "Scalability", "Backend"],
    },
    {
        title: "The Importance of UI/UX in Modern Websites",
        createdAt: new Date("2025-03-21T14:30:00Z"),
        image: "https://example.com/images/ui-ux.jpg",
        content: "A well-designed UI/UX ensures an engaging user experience...",
        tags: ["UI/UX", "Design", "Web Development"],
    },
    {
        title: "Why GraphQL is Replacing REST APIs",
        createdAt: new Date("2025-03-22T09:45:00Z"),
        image: "https://example.com/images/graphql.jpg",
        content:
            "GraphQL provides a flexible alternative to REST APIs with efficient...",
        tags: ["GraphQL", "APIs", "Backend"],
    },
    {
        title: "Leveraging AI for Personalized E-commerce",
        createdAt: new Date("2025-03-23T16:20:00Z"),
        image: "https://example.com/images/ai-ecommerce.jpg",
        content:
            "AI-driven personalization is revolutionizing e-commerce experiences...",
        tags: ["AI", "E-commerce", "Personalization"],
    },
    {
        title: "Best Practices for Writing Clean Code",
        createdAt: new Date("2025-03-24T11:50:00Z"),
        image: "https://example.com/images/clean-code.jpg",
        content:
            "Maintaining clean and readable code improves maintainability...",
        tags: ["Coding", "Best Practices", "Development"],
    },
    {
        title: "Exploring the Benefits of Serverless Computing",
        createdAt: new Date("2025-03-25T10:05:00Z"),
        image: "https://example.com/images/serverless.jpg",
        content: "Serverless computing allows developers to focus on code...",
        tags: ["Serverless", "Cloud", "DevOps"],
    },
    {
        title: "How to Monetize Your Blog in 2025",
        createdAt: new Date("2025-03-26T14:40:00Z"),
        image: "https://example.com/images/blog-monetization.jpg",
        content:
            "There are multiple ways to generate revenue from your blog...",
        tags: ["Blogging", "Monetization", "Passive Income"],
    },
    {
        title: "A Guide to Headless CMS Platforms",
        createdAt: new Date("2025-03-27T09:30:00Z"),
        image: "https://example.com/images/headless-cms.jpg",
        content: "Headless CMS provides flexibility in managing content...",
        tags: ["CMS", "Headless", "Web Development"],
    },
    {
        title: "Understanding the Power of Open Source",
        createdAt: new Date("2025-03-28T12:15:00Z"),
        image: "https://example.com/images/open-source.jpg",
        content: "Open source projects enable collaboration and innovation...",
        tags: ["Open Source", "Development", "Community"],
    },
    {
        title: "How to Create Viral Content in 2025",
        createdAt: new Date("2025-03-29T15:00:00Z"),
        image: "https://example.com/images/viral-content.jpg",
        content:
            "Understanding audience psychology can help create viral content...",
        tags: ["Content Marketing", "Social Media", "Trends"],
    },
];

module.exports = sampleBlogs;
