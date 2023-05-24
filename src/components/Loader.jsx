import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
    return (
        <div className="w-screen h-screen bg-transparent flex justify-center items-center">
              <ClipLoader />
        </div>
    )
}

export default Loader