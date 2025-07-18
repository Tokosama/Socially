import { getUserByClerkId } from '@/app/actions/user.action'
import React from 'react'
export async function generateMetadata({params} : {params:{username:string}}){
  const usert = await getUserByClerkId(params.username)
}
export default function ProfilePage({params}:{params:{username :String}}) {

    return (
    <div>
      Profile page
    </div>
  )
}
