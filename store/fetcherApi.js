import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetcherApi = createApi({
  reducerPath: "fetcherApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/",
    baseUrl: "https://big-c-backend.herokuapp.com/",
    credentials: "include",
  }),
  tagTypes: ["ForCar", "UserData"],
  endpoints(build) {
    return {
      //________Authentication
      registerUser: build.mutation({
        query: (body) => ({ url: "register", method: "post", body }),
        invalidatesTags: ["UserData"],
      }),

      loginUser: build.mutation({
        query: (body) => ({ url: "login", method: "post", body }),
        invalidatesTags: ["UserData"],
      }),

      getAuth: build.query({
        query: () => ({ url: "auth" }),
      }),

      logoutUser: build.mutation({
        query: () => ({ url: "logout", method: "get" }),
      }),

      //__________User
      getUser: build.query({
        query: () => ({ url: "user" }),
        providesTags: ["UserData"],
      }),

      updateUserName: build.mutation({
        query: ({ name }) => ({ url: "update-user", method: "put", body: name }),
        invalidatesTags: ["UserData"],
      }),

      //__________Profile
      postProfile: build.mutation({
        query: (body) => ({ url: "create-profile", method: "post", body }),
        invalidatesTags: ["UserData"],
      }),

      getAllProfiles: build.query({ query: () => ({ url: "all-profiles" }), providesTags: ["UserData"] }),

      getProfile: build.query({
        query: () => ({ url: "profile/me" }),
        providesTags: ["UserData"],
      }),

      //___________Car
      postCar: build.mutation({
        query: (body) => ({ url: "new-car", method: "post", body }),
        invalidatesTags: ["ForCar"],
      }),

      putCar: build.mutation({
        query: ({ id, formData }) => ({
          url: `update-car/${id}`,
          method: "put",
          body: values,
        }),
        invalidatesTags: ["ForCar"],
      }),

      getAllCars: build.query({
        query: () => ({ url: "all-cars" }),
        providesTags: ["ForCar"],
      }),

      getCarById: build.query({
        query: (id) => ({ url: `onecar/${id}` }),
        providesTags: ["ForCar"],
      }),

      getAllUserCars: build.query({
        query: () => ({ url: "my-car" }),
        providesTags: ["ForCar"],
      }),
    };
  },
});

export const {
  //______Authentication______
  useGetAuthQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  //_______User_________
  useGetUserQuery,
  useUpdateUserNameMutation,
  //_____Profile_________
  usePostProfileMutation,
  useGetProfileQuery,
  useGetAllProfilesQuery,
  //_____Car____________
  usePostCarMutation,
  usePutCarMutation,
  useGetAllCarsQuery,
  useGetCarByIdQuery,
  useGetAllUserCarsQuery,
} = fetcherApi;
