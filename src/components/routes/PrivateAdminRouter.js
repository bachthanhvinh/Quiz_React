import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateAdminRouter = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const account = useSelector((state) => state.user.account)
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  
  if(account.role !== 'ADMIN') {
    return <Navigate to='/'  />
  }

  return <>{children}</>;
};
export default PrivateAdminRouter;
