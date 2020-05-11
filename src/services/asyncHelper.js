export const baseURL = 'http://localhost:3000';

// Used for the router
export const configSiteLinks = {
	home: '/',
	forums: '/forums',
	forumThreadIndex: (categoryId = 0) => {
		return Object.assign(
			{},
			{
				create: () => `/threads/${categoryId}`,
				route: '/threads/:categoryId',
			}
		);
	},
	forumThread: (threadId = 0, categoryId = 0) => {
		return Object.assign(
			{},
			{
				route: '/threads/:categoryId/:threadId',
				create: () => this.forumThreadIndex(categoryId).create() + `/threads/` + threadId,
			}
		);
	},
};

// Categories Page
export const forumThreadIndexLink = (categoryId) =>
	configSiteLinks.forums + configSiteLinks.forumThreadIndex(categoryId);

// Go To specific thread
// pattern is  "/forums/threads/:categoryId/:threadId"
export const forumThreadLink = (categoryId, threadId) => forumThreadLink(categoryId) + `/${threadId}`;

export const formatProjectJson = () => {
	return {};
};
