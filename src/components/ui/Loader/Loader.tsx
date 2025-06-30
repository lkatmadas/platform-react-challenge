import Styled from './Loader.styles'

const Loader = () => {
  const { Overlay, Loader, VisuallyHidden } = Styled

  return (
    <Overlay role="status" aria-live="polite" aria-label="Loading content">
      <Loader />
      <VisuallyHidden>Loading content…</VisuallyHidden>
    </Overlay>
  )
}

export default Loader
