import Link from "next/link";
import { AiOutlineCar } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const current = new Date();
  const date = current.getFullYear();

  return (
    <div>
      <footer id="footer" className="relative z-50 bg-blue-800 pt-14">
        <div className=" border-t border-b border-gray-500 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="xl:flex">
              <div className="w-full xl:w-1/2 mb-10 xl:mb-0 flex">
                <div className="w-full xl:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="/#">
                        <a className="footerlinks">Profile</a>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">Market</a>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">Sellers</a>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">FAQ</a>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">About This Project</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full xl:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="/#">
                        <a className="footerlinks">Logout</a>
                      </Link>
                    </li>

                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">Blog</a>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">Changelog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full xl:w-1/2 flex">
                <div className="w-full xl:w-1/2 px-6">
                  <ul>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">Privacy policy</a>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link href="/#">
                        <a className="footerlinks">Terms of service</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full xl:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-3 space-x-4">
                    <Link href="/#">
                      <a>
                        <BsLinkedin className="socialmedialogo" />
                      </a>
                    </Link>
                    <Link href="/#">
                      <a>
                        <BsWhatsapp className="socialmedialogo" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-col justify-center items-center">
          <Link href="/about">
            <a>
              <div className="flex-shrink-0 cursor-default flex items-center">
                <AiOutlineCar className="text-6xl  text-blue-400" />
                <h1 className="text-white text-3xl font-logo-font">Big-C</h1>
              </div>
            </a>
          </Link>
          <p className="mt-2 text-xs xl:text-sm leading-none text-gray-50">
            <span>{date}</span> Big-C. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
