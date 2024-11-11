import React from 'react'

export default function Profilepic({h=60, y=60, img = `/post_iqra.jpg`}) {
  return (
        <div className="profile-pic-wrapper-outer overflow-hidden rounded-full" style={{height : h, width : y}}>
            <div className="profile-pic-wrapper-inner border-white dark:border-slate-900">
                <img src={img} className="status-avatar w-full h-full" alt="avatar" />
            </div>
        </div>
  )
}
