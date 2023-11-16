// import { useMutation } from "@tanstack/react-query";
// // import { login as loginAPI } from '../../services/apiAuth';
// import { login as loginAPI } from "../../services/auth";
// // import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// export function useGoogleAuth() {
//   // const navigate = useNavigate();
//   // const queryClient = useQueryClient();

//   const { mutate: googleLogin, isLoading: isGoogleLoading } = useMutation(
//     loginAPI,
//     {
//       onSuccess: () => {
//         toast.success("Login successful");
//       },

//       onError: (err) => {
//         console.error("Login error:", err);
//         toast.error("The provided email or password are incorrect");
//       },
//     }
//   );

//   return { googleLogin, isGoogleLoading };
// }
