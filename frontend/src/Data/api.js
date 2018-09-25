const endPoint = "http://localhost:8888/wp-json";
const wpAPI = {
    settings: `${endPoint}/wp/v2/settings`,
    posts: `${endPoint}/wp/v2/posts`,
    pages: `${endPoint}/wp/v2/pages`,
    postTypes: `${endPoint}/wp/v2/types`,
    acf: `${endPoint}/acf/v3/posts`,
}

export default {endPoint, wpAPI}
