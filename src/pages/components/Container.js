export default function Container({ heading, children }) {
  return (
    <>
      <h1>{ heading }</h1>
      <div className="container-body">
        { children }
      </div>
    </>
  )
}