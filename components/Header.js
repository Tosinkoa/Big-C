import { Fragment } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProfileQuery, useLogoutUserMutation } from "@/store/fetcherApi";
import { useDispatch } from "react-redux";
import { fetcherApi } from "@/store/fetcherApi";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [logoutUser] = useLogoutUserMutation();
  const { data: profileData } = useGetProfileQuery();

  return (
    <Disclosure as="nav" className="bg-blue-800">
      {({ open }) => (
        <>
          <div className="header">
            <div className="myheader">
              <div className="theheader">
                {/* Mobile menu button*/}
                <Disclosure.Button className="headerdisclosurebutton">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="headerimages">
                <Link href="/">
                  <a className="flex-shrink-0 cursor-default flex items-center">
                    <AiOutlineCar className="text-4xl  text-blue-400" />
                    <h1 className="text-white text-3xl font-logo-font">Big-C</h1>
                  </a>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/profile">
                      <a className="largescreentenery active:bg-blue-500 active:text-white">Profile</a>
                    </Link>
                    <Link href="/">
                      <a className="largescreentenery active:bg-blue-500 active:text-white">Market</a>
                    </Link>
                    <Link href="/sellers">
                      <a className="largescreentenery active:bg-blue-500 active:text-white">Sellers</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="avatarandothers">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="menubutton">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className=" rounded-full w-auto h-8"
                        src={profileData ? profileData.profileImage : "/assets/images/no-profile-image.jpg"}
                        width="40"
                        height="40"
                        alt="profile"
                        objectFit="cover"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="menuitems">
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`${active ? "bg-gray-100" : "bg-gray-100"} accounttoggle`}>
                            <button
                              onClick={() => {
                                logoutUser();
                                dispatch(fetcherApi.util.resetApiState());
                                router.push("/login");
                              }}
                            >
                              Sign out
                            </button>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button href="/profile" className="mobileteneryoption">
                <Link
                  href="/profile"
                  onClick={() => {
                    profileHandler();
                    userNameHandler();
                  }}
                  passHref
                >
                  Profile
                </Link>
              </Disclosure.Button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button className="active:bg-blue-500 active:text-white mobileteneryoption">
                <Link href="/">Market</Link>
              </Disclosure.Button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button className="active:bg-blue-500 active:text-white mobileteneryoption">
                <Link href="/sellers">Sellers</Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
