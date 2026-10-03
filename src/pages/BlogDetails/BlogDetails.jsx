import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";

import api from "../../api/axios";
import { formattedDate } from "../../hooks/useFormattedDate";



//eslint-disable-next-line
export async function loader({ params }) {
    try {
        const response = await api.get(`/blogs/${params.slug}`);

        const blogDetails = response?.data?.data?.blog;

        return {
            blogDetails
        }
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Blog fetched successfully");
    }
};

const BlogDetails = () => {
    const { blogDetails } = useLoaderData();



    return (
        <section className="container py-5">

            <div className="mb-4">
                <img
                    src={blogDetails?.image}
                    alt={blogDetails?.blogTitle}
                    className="img-fluid rounded w-100"
                />
            </div>

            <span className="badge bg-primary mb-3">
                {blogDetails?.blogCategory}
            </span>

            <h1 className="fw-bold mb-3">
                {blogDetails?.blogTitle}
            </h1>

            <div className="d-flex gap-4 text-secondary mb-4">
                <span>By Admin</span>
                <span>{formattedDate(blogDetails?.blogPostDate)}</span>
                <span>8 min read</span>
            </div>

            <p className="lead">
                {blogDetails?.blogDescription}
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

export default BlogDetails;