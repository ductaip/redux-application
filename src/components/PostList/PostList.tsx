import { RootState } from '@/store'
import PostItem from '../PostItem'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { deletePost } from '@/pages/blog/blog.reducer';

export default function PostList() {
  const dispatch = useDispatch()

  const postList = useSelector((state: RootState) => state.blog.postList)
  //PostItem o tang nho nen truyen function tu parent compo vao
  const handleDelete = (postId: string) => dispatch(deletePost(postId))
  return (
    <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Hi guys
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi
                tệ. Nhưng ngày mốt sẽ có nắng
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
              {postList.map((post) => (
                <PostItem key={post.id} post={post} handleDelete={handleDelete} />
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
