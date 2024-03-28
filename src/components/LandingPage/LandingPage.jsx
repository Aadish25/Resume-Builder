import { Navigate } from "react-router";

export default function LandingPage() {
  return (
    <div>
      {localStorage.getItem("SavedToken") === null ? (
        <Navigate to={"/login"} replace={true} />
      ) : (
        <Navigate to={"/home"} replace={true} />
      )}
    </div>
  );
}
