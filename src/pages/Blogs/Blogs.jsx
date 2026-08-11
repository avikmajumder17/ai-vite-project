import { Link } from "react-router-dom";

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



export const Blogs = () => {
    return (
        <section className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Latest Blogs</h1>
                <p className="text-secondary">
                    Stay updated with the latest AI news and technology.
                </p>
            </div>

            <div className="row g-4">
                {blogs.map((blog) => (
                    <div className="col-lg-4 col-md-6" key={blog.id}>
                        <div className="card bg-dark border-secondary h-100 text-light shadow">
                            <img
                                src={blog.image}
                                className="card-img-top"
                                alt={blog.title}
                            />

                            <div className="card-body d-flex flex-column">
                                <span className="badge bg-primary mb-2">
                                    {blog.category}
                                </span>

                                <h4>{blog.title}</h4>

                                <p className="text-secondary">
                                    {blog.description}
                                </p>

                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="btn btn-primary mt-auto"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
