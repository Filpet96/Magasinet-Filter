const endPoint = "http://localhost:8888/wp-json";
const wpAPI = {
    settings: `${endPoint}/wp/v2/settings`,
    articles: `${endPoint}/filter/articles/`,
    article: `${endPoint}/filter/article/`,
    acf: `${endPoint}/acf/v3/posts`,
}

export default {endPoint, wpAPI}
