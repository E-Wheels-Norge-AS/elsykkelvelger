import { TailSpin } from 'react-loader-spinner' 

const Loader = () => {
  return (
   <div className="loader">
    <h2>Leter på lageret..</h2>
    <TailSpin   
      visible={true}
      height="80"
      width="80"
      color="#75cdd8"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
  )
}

export default Loader