export const publishedAt = (dateString) => {
    const date= new Date(dateString);
    const diffinMin = Date.now() - date.getTime();
    const diffinDays = Math.floor(diffinMin /(1000 * 60 * 60 * 24));
    return diffinDays + "days ago..";
}