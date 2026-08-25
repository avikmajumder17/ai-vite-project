export const formattedDate = (date) => {
    const formatDate = new Date(date);

    return formatDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
};