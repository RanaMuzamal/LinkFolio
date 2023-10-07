import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-cyan-400 to-slate-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-10">
          <Image src="/assets/logo.jpg" alt="Logo" width={60} height={60} />

          <a
            href="/assets/M Muzamal Software Engineer.pdf"
            download="M Muzamal Software Engineer.pdf"
            className="px-3 py-3 text-sm md:text-lg md:px-9 md:py-4 cursor-pointer bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
          >
            Download CV
          </a>
        </nav>

        <div className="text-center">
          <div className="flex justify-center mb-5">
            <Image
              src="/assets/profile.jpg"
              width={150}
              height={150}
              alt="Image"
              className="rounded-full"
            />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-3xl uppercase mb-4">
            Rana Muzamil
          </h6>

          <h1 className="font-bold text-gray-900 text-3xl md:text-5xl leading-none mb-4">
            Software Engineer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-8 md:px-32 px-0">
            I'm deeply passionate about software development, driven by my
            desire to create user-centric solutions. I enjoy creating tools that
            make life easier for people.
          </p>

          <Link
            href="#"
            download=""
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </Link>

          <div className="py-10">
            <a
              href="mailto:muzamilrana149@gmail.com"
              type="button"
              className="text-white bg-gray-200 hover:bg-gray-100/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 "
                viewBox="0 0 21 21"
                fill="none"
              >
                <mask
                  id="mask0_225_226"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="21"
                >
                  <rect
                    x="0.857178"
                    width="20.1429"
                    height="20.1429"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_225_226)">
                  <path
                    d="M5.84348 17.0225V9.91535L3.63934 7.8989L1.66284 6.77991V15.7683C1.66284 16.4622 2.2251 17.0225 2.91706 17.0225H5.84348Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M15.877 17.0225H18.8034C19.4974 17.0225 20.0576 16.4602 20.0576 15.7683V6.78003L17.8189 8.0617L15.877 9.9154V17.0225Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.8435 9.91538L5.54358 7.13842L5.8435 4.48059L10.8602 8.24318L15.877 4.48059L16.2125 6.99492L15.877 9.91538L10.8602 13.678L5.8435 9.91538Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M15.877 4.4805V9.91529L20.0576 6.77984V5.10757C20.0576 3.55659 18.2871 2.67242 17.0476 3.60258L15.877 4.4805Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M1.66284 6.77988L3.5856 8.222L5.84348 9.91532V4.48053L4.67283 3.60261C3.43118 2.67238 1.66284 3.55663 1.66284 5.10753V6.7798V6.77988Z"
                    fill="#C5221F"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/rana.muzamal.182/"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mx-auto "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/rana_muzamil_"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://github.com/RanaMuzamal"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </a>

            <a
              href="https://wa.me/03200962399"
              className="bg-white hover:bg-gray focus:ring-4 focus:outline-none focus:ring-[#25d366]/50 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#25d366]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 "
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.06702 24.7008C1.06584 28.9017 2.17209 33.0037 4.27561 36.6192L0.865845 48.9723L13.6065 45.6576C17.1304 47.5611 21.0786 48.5585 25.0908 48.5587H25.1014C38.3465 48.5587 49.1283 37.8643 49.134 24.7196C49.1365 18.35 46.6389 12.3605 42.101 7.85427C37.5639 3.34845 31.5297 0.8657 25.1004 0.862793C11.8537 0.862793 1.07268 11.5566 1.06721 24.7008"
                  fill="url(#paint0_linear_225_295)"
                />
                <path
                  d="M18.8824 14.3698C18.4164 13.3421 17.926 13.3213 17.4828 13.3033C17.1199 13.2878 16.7051 13.289 16.2906 13.289C15.8758 13.289 15.2018 13.4438 14.6321 14.0611C14.0617 14.6789 12.4547 16.1719 12.4547 19.2085C12.4547 22.2454 14.6838 25.18 14.9946 25.5923C15.3057 26.0037 19.2979 32.4347 25.6205 34.9087C30.8752 36.9647 31.9446 36.5558 33.085 36.4527C34.2256 36.35 36.7655 34.9601 37.2836 33.5188C37.8022 32.0777 37.8022 30.8424 37.6467 30.5843C37.4912 30.3271 37.0764 30.1727 36.4543 29.8642C35.8321 29.5554 32.7739 28.0622 32.2037 27.8562C31.6334 27.6504 31.2188 27.5477 30.8039 28.1657C30.3891 28.7828 29.1979 30.1727 28.8348 30.5843C28.4721 30.9969 28.109 31.0483 27.4871 30.7395C26.8647 30.4298 24.8614 29.7789 22.4846 27.6764C20.6354 26.0403 19.3869 24.02 19.024 23.4019C18.6612 22.7849 18.9852 22.4504 19.2971 22.1428C19.5766 21.8663 19.9194 21.4221 20.2307 21.0618C20.5408 20.7014 20.6444 20.4442 20.8518 20.0326C21.0594 19.6205 20.9555 19.2601 20.8002 18.9514C20.6444 18.6426 19.4356 15.5901 18.8824 14.3698Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_225_295"
                    x1="2414.27"
                    y1="4811.81"
                    x2="2414.27"
                    y2="0.862793"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1FAF38" />
                    <stop offset="1" stopColor="#60D669" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
