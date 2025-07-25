import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from '@/app/actions/profile.action'
import { notFound } from 'next/navigation';
import React from 'react'
export async function generateMetadata({params} : {params:{username:string}}){
  const user = await getProfileByUsername(params.username);
  if(!user) return;

  return{
    title:`${user.name} ?? ${user?.username}`,
    description:user.bio || `Check out ${user.username}'s profile`
  }
}


 export async  function ProfilePageServer({params}:{params:{username :string}}) {
  const user = await getProfileByUsername(params?.username);


  if(!user) notFound

  const [posts,likePosts,isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user?.id || ''),
    getUserLikedPosts(user?.id || ''),
    isFollowing(user?.id ||''),
  ])
    return (
      
      
   <ProfilePageClient
   user={user}
   posts={posts}
   likedPosts={likePosts}
   isFollowing={isCurrentUserFollowing} 

   
   />
  )
}
