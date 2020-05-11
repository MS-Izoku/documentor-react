export const baseURL = "http://localhost:3000/";

const configSiteLinks = {
    home: "/",
    forums: "/forums",
    forumThreadIndex: (categoryID) => `/threads/${categoryID}`,

}

export const forumLink = baseURL + "/forums"

export const getThreadLink = (categoryID) => baseURL + configSiteLinks.forums + configSiteLinks.forumThreadIndex(categoryID)



export const formatProjectJson = () =>{
    return {}
}