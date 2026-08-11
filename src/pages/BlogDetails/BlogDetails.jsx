import { Link, useParams } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: "How AI is Changing the Future",
        slug: "how-ai-is-changing-the-future",
        category: "Artificial Intelligence",
        image: "https://picsum.photos/600/350?random=1",
        description:
            "Discover how artificial intelligence is transforming industries and improving productivity worldwide.",
    },
    {
        id: 2,
        title: "Top 10 AI Tools in 2026",
        slug: "top-10-ai-tools-in-2026",
        category: "Technology",
        image: "https://picsum.photos/600/350?random=2",
        description:
            "Explore the best AI tools that developers, designers, and businesses are using today.",
    },
    {
        id: 3,
        title: "Machine Learning vs Deep Learning",
        slug: "machine-learning-vs-deep-learning",
        category: "Education",
        image: "https://picsum.photos/600/350?random=3",
        description:
            "Understand the difference between Machine Learning and Deep Learning with simple examples.",
    },
];



export const BlogDetails = () => {
    const { slug } = useParams();

    const blogDetails = blogs.find(blog => blog.slug === slug);


    return (
        <section className="container py-5">

            <div className="mb-4">
                <img
                    src={blogDetails?.image}
                    alt={blogDetails?.title}
                    className="img-fluid rounded w-100"
                />
            </div>

            <span className="badge bg-primary mb-3">
                {blogDetails?.category}
            </span>

            <h1 className="fw-bold mb-3">
                {blogDetails?.title}
            </h1>

            <div className="d-flex gap-4 text-secondary mb-4">
                <span>By Admin</span>
                <span>July 20, 2026</span>
                <span>8 min read</span>
            </div>

            <p className="lead">
                {blogDetails?.description}
            </p>

            <h3 className="mt-5 mb-3">
                Key Takeaways
            </h3>

            <ul className="list-group list-group-flush mb-5">
                <li className="list-group-item bg-dark text-light">
                    ✔ AI automates repetitive tasks.
                </li>

                <li className="list-group-item bg-dark text-light">
                    ✔ Businesses use AI to improve efficiency.
                </li>

                <li className="list-group-item bg-dark text-light">
                    ✔ Machine Learning powers modern applications.
                </li>

                <li className="list-group-item bg-dark text-light">
                    ✔ AI will continue shaping the future.
                </li>
            </ul>

            <Link to="/blogs" className="btn btn-outline-light">
                ← Back to Blogs
            </Link>

        </section>
    )
}
