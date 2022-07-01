import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { CogIcon, LogoutIcon } from "@heroicons/react/solid";
import Avatar from "../components/atoms/Avatar";
import AccountSettings from "../components/organisms/AccountSettings";
import StackTemplate from "../components/templates/StackTemplate";

export default function Settings() {
  const principal = useSelector((state) => state.auth.principal);

  useEffect(() => {
    document.title = "Twaddle Web | Settings";
  }, []);

  return (
    <StackTemplate>
      <div className="h-full bg-white dark:bg-gray-600">
        <div className="xl:container mx-auto p-4">
          <Tab.Group
            as="div"
            className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
          >
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col space-y-6">
              <div className="w-full flex space-x-4 items-center max-w-full text-gray-800 dark:text-white">
                <div className="bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white p-2 rounded-full">
                  <div className="h-10 aspect-square rounded-md">
                    <Avatar value={principal.username} />
                  </div>
                </div>
                <div className="space-y-1 max-w-full overflow-hidden">
                  <span className="block text-lg truncate">
                    {principal.username}
                  </span>
                  <span className="block text-xs">Your personal account</span>
                </div>
              </div>
              <Tab.List className="rounded-xl w-full text-gray-700 dark:text-gray-200 space-y-4">
                <Tab
                  className={({ selected }) =>
                    `w-full flex items-center space-x-2 p-2 text-sm leading-5 font-medium rounded-lg outline-none
                      ${
                        selected
                          ? "border-l-4 border-l-amber-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                          : "hover:bg-gray-100 hover:dark:bg-gray-700"
                      }`
                  }
                >
                  <CogIcon className="h-6 w-6" aria-hidden="true" />
                  <div>Account</div>
                </Tab>
                <hr />
                <Link
                  to="/logout"
                  className="group relative py-2 px-3 text-sm font-medium rounded-md outline-none hover:brightness-110 disabled:opacity-50 w-full flex justify-center space-x-2 bg-transparent border border-red-500 text-red-500 focus:outline-red-500"
                >
                  <div>Logout</div>
                  <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
              </Tab.List>
            </div>
            <Tab.Panels as="div" className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
              <Tab.Panel>
                <AccountSettings />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </StackTemplate>
  );
}