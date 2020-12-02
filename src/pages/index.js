import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header headerText="About Gatsby!" />
      <Header headerText="It's pretty cool" />
      <Link to="/contact/">Contact</Link>
      <div>Hello world!</div>
      <div><h1>:-)</h1></div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
