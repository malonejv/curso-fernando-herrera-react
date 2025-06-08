import './Loading.css'
import PropTypes from 'prop-types'

export const Loading = ({ isLoading, loadingMessage }) => {
  return (
    <>
      {isLoading && <div className="loading">{loadingMessage || "Loading..."}</div>}
    </>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingMessage: PropTypes.string,
}
Loading.defaultProps = {
  loadingMessage: "Loading...",
}