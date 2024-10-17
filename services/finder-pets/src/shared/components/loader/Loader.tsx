import * as s from "./LoaderStyle.css"

const Loader = () => {
  return (
    <div className={s.loaderBox}>
      <div className={s.loader}></div>
    </div>
  )
}

export default Loader
