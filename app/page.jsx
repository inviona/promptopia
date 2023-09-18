import React from 'react';
import Feed from '@components/feed'
const Home = () => {
  return (
  <section className="w-full  flex-center flex-col">
    <h1 className="head_text text-center">Discover & Share
    <br className="max-md:hiden " />
    <span className="orange_gradient text-center">AI-Powred Prompts</span>
    </h1>
    <p className="decs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum molestias repellat fugit officiis quas, eligendi perspiciatis itaque non adipisci harum ea laboriosam neque fugiat cum omnis veritatis maxime voluptatibus.</p>
    <Feed />   
  </section>
  
  )
}

export default Home