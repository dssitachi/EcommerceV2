import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center z-[999]">
              <ClipLoader />
        </div>
    )
}

export default Loader