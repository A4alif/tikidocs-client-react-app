import React from 'react'

const Announcements = () => {
  return (
    <>
        <div className="mt-16 py-9 " >
        <div
          className="h-[200px] w-full bg-green-500"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/jSx6jFm2/forum-background.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto">
            <div className="flex items-center h-[200px]" >
              <h2 className="text-3xl md:text-4xl lg:text-5xl single-text-gradient font-bold">Admin Announcements</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Announcements