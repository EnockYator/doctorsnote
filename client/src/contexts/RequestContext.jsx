/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */


import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  requestNote,
  getAllRequests, 
  getRequestById, 
  deleteRequest,
  resetRequest
} from "./../store/request-slice";
// Create a RequestContext
const RequestContext = createContext(null);

// RequestContext to wrap app or specific components
export const RequestProvider = ({ children }) => {

    const dispatch = useDispatch();

    // Get request states
    const requestState = useSelector((state) => state.request);

    // Extract specific values for convenience
    const newRequest = requestState.newRequest || null;
    const allRequests = requestState.allRequests || [];
    const requestById = requestState.requestById || null;
    const deletedRequest = requestState.deletedRequest || null;
    

    console.log("allRequests: " + allRequests);
    console.log("newRequest: " + newRequest);
    console.log("requestById: " + requestById);
    console.log("deletedRequest: " + deletedRequest);

  //const [isRequesting, setIsRequesting] = useState(false);

  // useEffect(() => {
  //   if (isRequesting) {
  //     dispatch(getAllRequests()); // Fetch requests on load or state change
  //   }
  // }, [isRequesting, dispatch]);

  // Define actions
  const actions ={
    requestNote: (formData) => dispatch(requestNote(formData)),
    getAllRequests: () => dispatch(getAllRequests()),
    getRequestById: (id) => dispatch(getRequestById(id)),
    deleteRequestById: (id) => dispatch(deleteRequest(id)),
    resetRequest: (data) => dispatch(resetRequest(data))
    };

  return (
    <RequestContext.Provider value={{ allRequests, newRequest, requestById, deletedRequest, actions }}>
    {children}
    </RequestContext.Provider>
  );
};


// Custom hook for RequestContext
export const useRequest = () => {
    const context = useContext(RequestContext);
    if (!context) {
        throw new Error('UseRequest must be used within an RequestProvider');
    }
    return context;
};