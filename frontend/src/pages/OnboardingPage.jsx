import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser"
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api"
import { CameraIcon, ShuffleIcon } from "lucide-react";


const OnboardingPage = () => {

  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();
  const [formState, setFromState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",

  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully");
      QueryClient.invalidateQueries({ queryKey: ["authUser"] });
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    onboardingMutation(formState);
  }

  const handleRandomAvatar = () => { };


  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Complete Your Profile
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="size-32 rounded-full bg-base-300 overflow-hidden">
              {
                formState.profilePic ? (
                  <img src={formState.profilePic} alt="profile preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 text-base-content opacity-40" />
                  </div>
                )
              }
            </div>

            <div className="flex items-center gap-2 ">
              <button type="button" onClick={handleRandomAvatar} className="btn btn-acccent">
                <ShuffleIcon className="size-4 mr-2" />
                Generate Random Avatar
              </button>
            </div>

          </div>
          {/*full name*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>

            <input
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={(e) => setFromState({ ...formState, fullName: e.target.value })}
              className="input input-bordered w-full"
              placeholder="Your full name"


            />
          </div>

          {/*Bio*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bio</span>
            </label>
            <textarea
              name="bio"
              value={formState.bio}
              onChange={(e) => setFromState({ ...formState, bio: e.target.value })}
              className="textarea textarea-bordered h-24"
              placeholder="Tell others about yourself and your language leaning goals" />


          </div>
        </form>
      </div>

    </div>
  )
}

export default OnboardingPage
