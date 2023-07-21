import { PostService } from "./05-dependency-b";
import {
	JSONDatabaseService,
	LocalDataBaseService,
	WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
	const postProvider = new WebApiPostService();
	const postService = new PostService(postProvider);

	const posts = await postService.getPosts();

	console.log({ posts });
})();
