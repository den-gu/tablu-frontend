import React from 'react'

const Layout = (props: any) => {
  return (
    <section id="content" className="flex justify-center px-6 py-8">
    <div id="wrapper" className="max-w-5xl w-full flex flex-col">
        {props.children}
    </div>
    </section>
  )
}

export default Layout