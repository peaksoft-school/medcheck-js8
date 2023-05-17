import { useState } from 'react'

export const useUploadAvatar = () => {
   const [avatarUrl, setAvatarUrl] = useState('')
   const handleAvatarChange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
         setAvatarUrl(reader.result)
      }
      reader.readAsDataURL(file)
   }
   return [avatarUrl, handleAvatarChange]
}
