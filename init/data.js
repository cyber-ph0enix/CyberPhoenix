const sampleBlogs = [
    {
        title: "Understanding Cybersecurity",
        createdAt: new Date(),
        image: "https://example.com/cybersecurity.jpg",
        content: [
            "Cybersecurity is a crucial field in today's digital age.",
            "It involves protecting systems, networks, and data from cyber threats.",
            "Organizations must invest in security measures to prevent cyber attacks.",
        ],
        tags: ["Cybersecurity", "Tech", "Security"],
    },
    {
        title: "The Rise of AI in Everyday Life",
        createdAt: new Date(),
        image: "https://example.com/ai.jpg",
        content: [
            "Artificial Intelligence is transforming the way we live and work.",
            "From voice assistants to self-driving cars, AI is everywhere.",
            "Companies are leveraging AI to enhance productivity and efficiency.",
        ],
        tags: ["AI", "Technology", "Innovation"],
    },
    {
        title: "Benefits of Cloud Computing",
        createdAt: new Date(),
        image: "https://example.com/cloud.jpg",
        content: [
            "Cloud computing allows businesses to store and access data remotely.",
            "It offers scalability, security, and cost-effectiveness.",
            "Popular cloud providers include AWS, Azure, and Google Cloud.",
        ],
        tags: ["Cloud Computing", "Tech", "Business"],
    },
    {
        title: "How to Start a Blog in 2025",
        createdAt: new Date(),
        image: "https://example.com/blogging.jpg",
        content: [
            "Starting a blog is easier than ever with modern platforms.",
            "Choose a niche, set up a domain, and start writing engaging content.",
            "SEO and social media play a big role in blog success.",
        ],
        tags: ["Blogging", "SEO", "Content Marketing"],
    },
    {
        title: "The Future of Electric Vehicles",
        createdAt: new Date(),
        image: "https://example.com/ev.jpg",
        content: [
            "Electric vehicles (EVs) are gaining popularity due to sustainability.",
            "Major car manufacturers are investing in EV technology.",
            "The shift towards EVs will reduce carbon emissions globally.",
        ],
        tags: ["EVs", "Technology", "Sustainability"],
    },
    {
        title: "Top JavaScript Frameworks in 2025",
        createdAt: new Date(),
        image: "https://example.com/javascript.jpg",
        content: [
            "JavaScript frameworks make web development faster and easier.",
            "Popular frameworks include React, Vue, and Angular.",
            "Choosing the right framework depends on project requirements.",
        ],
        tags: ["JavaScript", "Web Development", "Programming"],
    },
    {
        title: "Why Mental Health Matters",
        createdAt: new Date(),
        image: "https://example.com/mentalhealth.jpg",
        content: [
            "Mental health is just as important as physical health.",
            "Practicing mindfulness and self-care can improve well-being.",
            "Seeking professional help when needed is essential.",
        ],
        tags: ["Mental Health", "Wellness", "Self-care"],
    },
    {
        title: "How to Learn Coding Fast",
        createdAt: new Date(),
        image: "https://example.com/coding.jpg",
        content: [
            "Learning to code requires dedication and practice.",
            "Start with languages like Python or JavaScript.",
            "Online resources and projects can accelerate learning.",
        ],
        tags: ["Coding", "Programming", "Education"],
    },
    {
        title: "Blockchain Beyond Cryptocurrency",
        createdAt: new Date(),
        image: "https://example.com/blockchain.jpg",
        content: [
            "Blockchain technology is revolutionizing industries beyond crypto.",
            "It offers security, transparency, and decentralization.",
            "Applications include supply chain management and smart contracts.",
        ],
        tags: ["Blockchain", "Technology", "Crypto"],
    },
    {
        title: "The Power of Minimalism",
        createdAt: new Date(),
        image: "https://example.com/minimalism.jpg",
        content: [
            "Minimalism is about simplifying life by removing excess.",
            "It can improve focus, reduce stress, and increase happiness.",
            "Adopting minimalism requires a shift in mindset.",
        ],
        tags: ["Minimalism", "Lifestyle", "Wellness"],
    },
    {
        title: "Building a Startup from Scratch",
        createdAt: new Date(),
        image: "https://example.com/startup.jpg",
        content: [
            "Starting a business requires planning, funding, and execution.",
            "A strong team and innovative ideas are key to success.",
            "Scaling a startup involves marketing and customer engagement.",
        ],
        tags: ["Startup", "Business", "Entrepreneurship"],
    },
    {
        title: "The Evolution of Smartphones",
        createdAt: new Date(),
        image: "https://example.com/smartphones.jpg",
        content: [
            "Smartphones have evolved rapidly in the past decade.",
            "Features like AI cameras and foldable screens are now common.",
            "The future of smartphones includes AR and AI-driven experiences.",
        ],
        tags: ["Smartphones", "Technology", "Innovation"],
    },
    {
        title: "Importance of Cyber Hygiene",
        createdAt: new Date(),
        image: "https://example.com/cyberhygiene.jpg",
        content: [
            "Cyber hygiene refers to maintaining security practices online.",
            "Using strong passwords and enabling 2FA can prevent hacks.",
            "Regular software updates are essential for security.",
        ],
        tags: ["Cybersecurity", "Tech", "Privacy"],
    },
    {
        title: "The Rise of Remote Work",
        createdAt: new Date(),
        image: "https://example.com/remotework.jpg",
        content: [
            "Remote work has become a global trend after the pandemic.",
            "It offers flexibility but requires discipline and time management.",
            "Many companies now offer hybrid work models.",
        ],
        tags: ["Remote Work", "Business", "Productivity"],
    },
    {
        title: "The Science of Sleep",
        createdAt: new Date(),
        image: "https://example.com/sleep.jpg",
        content: [
            "Quality sleep is crucial for overall health and well-being.",
            "A consistent sleep schedule can improve productivity.",
            "Avoiding screens before bed helps in better sleep quality.",
        ],
        tags: ["Health", "Wellness", "Science"],
    },
    {
        title: "Mastering Public Speaking",
        createdAt: new Date(),
        image: "https://example.com/publicspeaking.jpg",
        content: [
            "Public speaking is a valuable skill in personal and professional life.",
            "Confidence and practice can improve speaking abilities.",
            "Storytelling is an effective technique to engage an audience.",
        ],
        tags: ["Public Speaking", "Communication", "Skills"],
    },
    {
        title: "A Beginner’s Guide to Investing",
        createdAt: new Date(),
        image: "https://example.com/investing.jpg",
        content: [
            "Investing is key to long-term financial growth.",
            "Understanding stocks, bonds, and mutual funds is essential.",
            "Diversification helps in minimizing risks.",
        ],
        tags: ["Investing", "Finance", "Money"],
    },
    {
        title: "The Impact of Social Media",
        createdAt: new Date(),
        image: "https://example.com/socialmedia.jpg",
        content: [
            "Social media connects people globally but has downsides.",
            "It can impact mental health and productivity if overused.",
            "Being mindful of screen time is important.",
        ],
        tags: ["Social Media", "Technology", "Psychology"],
    },
    {
        title: "How to Build a Personal Brand",
        createdAt: new Date(),
        image: "https://example.com/personalbrand.jpg",
        content: [
            "Building a personal brand helps in career growth.",
            "Consistency and authenticity are key to branding.",
            "Leveraging social media can increase visibility.",
        ],
        tags: ["Personal Branding", "Career", "Marketing"],
    },
    {
        title: "The Psychology of Happiness",
        createdAt: new Date(),
        image: "https://example.com/happiness.jpg",
        content: [
            "Happiness is influenced by mindset and daily habits.",
            "Practicing gratitude can improve overall well-being.",
            "Strong relationships contribute to long-term happiness.",
        ],
        tags: ["Happiness", "Psychology", "Wellness"],
    },
];

module.exports = sampleBlogs;
