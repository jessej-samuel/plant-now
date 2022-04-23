import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import FileUploadIcon from "@mui/icons-material/FileUpload";

function User({ id, email }) {
  let params = useParams();
  return (
    <div
      className="flex h-screen flex-col justify-center items-center w-full bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("/assets/home_page.png")` }}
    >
      <input type="file" id="imgUpload" className="hidden" />
      <div
        className="p-4 rounded-full bg-yellow text-mygreen text-9xl hover:scale-[1.01] transition-all w-64 h-64 flex justify-center flex-col items-center shadown hover:shadow-md shadow-red-800"
        onClick={() =>
          // Add event listen onload
          
          document.getElementById("imgUpload").click()
        }
      >
        <FileUploadIcon color="inherit" fontSize="inherit" />
        <div className="text-xl text-center">Upload File</div>
      </div>
    </div>
  );
}

export default connect((state) => {
  return { email: state.email, password: state.password };
})(User);
