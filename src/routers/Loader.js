// loaders.js

export const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch data from ${url}`);
        return await res.json();
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
};

// Loader for Pricing Details
export const LoadSinglePricingData = async ({ params }) => {
    const data = await fetchData("/pricingV1.json");
    const selectedPlan = data.find((plan) => String(plan.id) === params.id);

    if (!selectedPlan) throw new Error("Plan not found");
    return selectedPlan;
};

// Loader for Blog Details
export const loadSingleBlogData = async ({ params }) => {
    const data = await fetchData("/blogData.json");
    const selectedBlog = data.find((blog) => String(blog.id) === params.id);

    if (!selectedBlog) throw new Error("Blog post not found");
    return selectedBlog;
};


