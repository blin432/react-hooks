import React from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

function Feed() {
  return (
    <div className="Feed">
      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button">
          View 3 New Posts
        </button>
      </div>

      <FeedPost post={fakePost} />

      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button">View More</button>
      </div>
    </div>
  )
}


const { createdBefore, viewedAll, limit, posts, newPosts } = state

  // helps us know when we've viewed all
  const lastPostIdRef = useRef()

  useEffect(() => {
    feedState = state
  })

  useEffect(() => {
    let current = true
    loadFeedPosts(createdBefore, limit).then(posts => {
      if (current) {
        dispatch({ type: "LOAD_POSTS", posts })
      }
    })
    return () => current = false
  }, [createdBefore, limit])

  useEffect(() => {
    return subscribeToNewFeedPosts(createdBefore, posts => {
      dispatch({ type: "LOAD_NEW_POSTS", posts })
    })
  }, [createdBefore])

  useEffect(() => {
    if (posts && posts[posts.length - 1].id === lastPostIdRef.current) {
      dispatch({ type: "VIEWED_ALL" })
    }
  }, [posts])

  const handleViewNewPosts = () => dispatch({ type: "VIEW_NEW_POSTS" })

  const handleViewMore = () => {
    lastPostIdRef.current = posts[posts.length - 1].id
    dispatch({ type: "VIEW_MORE" })
  }

