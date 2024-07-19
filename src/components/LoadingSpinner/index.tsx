import { Spinner, SpinnerWrapper } from "./loadingSpinner.style"

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper data-testid={"loading-spinner"}>
      <Spinner />
      <p>Loading...</p>
    </SpinnerWrapper>
  )
}

export default LoadingSpinner
