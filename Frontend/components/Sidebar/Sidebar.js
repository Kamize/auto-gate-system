import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "../Dropdowns/UserDropdown.js";
import { FiSettings } from "react-icons/fi";
import { AiOutlineTable } from "react-icons/ai";

export default function Sidebar({ role }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  // console.log(router.pathname.indexOf("/admin"));
  if (role === "admin") {
    return (
      <>
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6  bg-[rgb(240, 255, 255)/0.56] backdrop-blur-[80px] ">
          <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            {/* Toggler */}
            <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
            >
              menu
            </button>
            {/* Brand */}
            <Link href="/">
              <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
            </Link>
            {/* User */}
            {/* <ul className="md:hidden items-center flex flex-wrap list-none">
              <li className="inline-block relative">
                <UserDropdown />
              </li>
            </ul> */}
            {/* Collapse */}
            <div
              className={
                "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-black">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <Link href="/">
                      <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
                    </Link>
                  </div>
                  <div className="w-6/12 flex justify-end">
                    <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onClick={() => setCollapseShow("hidden")}>
                      menu
                    </button>
                  </div>
                </div>
              </div>
              {/* Form */}
              <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className=" px-3 py-2 h-12 border border-solid  border-black placeholder-black text-black bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                  />
                </div>
              </form>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline">Admin Layout Pages</h6>
              {/* Navigation */}

              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link href="/admin/dashboard">
                    <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? " text-scDark hover:text-black" : "text-black hover:text-black")}>
                      <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.57143 10.3929C5.82821 10.3929 5.31015 10.3924 4.90513 10.3635C4.50729 10.3351 4.2763 10.2819 4.10024 10.2051C3.57997 9.97813 3.16473 9.56288 2.93773 9.04261C2.86092 8.86655 2.80781 8.63556 2.77938 8.23773C2.75045 7.83271 2.75 7.31465 2.75 6.57143C2.75 5.82821 2.75045 5.31015 2.77938 4.90513C2.80781 4.50729 2.86092 4.2763 2.93773 4.10024C3.16473 3.57997 3.57997 3.16473 4.10024 2.93773C4.2763 2.86092 4.50729 2.80781 4.90513 2.77938C5.31015 2.75045 5.82821 2.75 6.57143 2.75C7.31465 2.75 7.83271 2.75045 8.23773 2.77938C8.63556 2.80781 8.86655 2.86092 9.04261 2.93773C9.56288 3.16473 9.97813 3.57997 10.2051 4.10024C10.2819 4.2763 10.3351 4.50729 10.3635 4.90513C10.3924 5.31015 10.3929 5.82821 10.3929 6.57143C10.3929 7.31465 10.3924 7.83271 10.3635 8.23773C10.3351 8.63556 10.2819 8.86655 10.2051 9.04261C9.97813 9.56288 9.56288 9.97813 9.04261 10.2051C8.86655 10.2819 8.63556 10.3351 8.23773 10.3635C7.83271 10.3924 7.31465 10.3929 6.57143 10.3929Z"
                          stroke="#242220"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6.57143 21.25C5.82821 21.25 5.31015 21.2496 4.90513 21.2207C4.50729 21.1922 4.2763 21.1391 4.10024 21.0623C3.57997 20.8353 3.16473 20.4201 2.93773 19.8998C2.86092 19.7237 2.80781 19.4927 2.77938 19.0949C2.75045 18.6899 2.75 18.1718 2.75 17.4286C2.75 16.6854 2.75045 16.1673 2.77938 15.7623C2.80781 15.3645 2.86092 15.1335 2.93773 14.9574C3.16473 14.4372 3.57997 14.0219 4.10024 13.7949C4.2763 13.7181 4.50729 13.665 4.90513 13.6366C5.31015 13.6076 5.82821 13.6072 6.57143 13.6072C7.31465 13.6072 7.83271 13.6076 8.23773 13.6366C8.63556 13.665 8.86655 13.7181 9.04261 13.7949C9.56288 14.0219 9.97813 14.4372 10.2051 14.9574C10.2819 15.1335 10.3351 15.3645 10.3635 15.7623C10.3924 16.1673 10.3929 16.6854 10.3929 17.4286C10.3929 18.1718 10.3924 18.6899 10.3635 19.0949C10.3351 19.4927 10.2819 19.7237 10.2051 19.8998C9.97813 20.4201 9.56288 20.8353 9.04261 21.0623C8.86655 21.1391 8.63556 21.1922 8.23773 21.2207C7.83271 21.2496 7.31465 21.25 6.57143 21.25Z"
                          stroke="#242220"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M17.4286 10.3929C16.6854 10.3929 16.1673 10.3924 15.7623 10.3635C15.3645 10.3351 15.1335 10.2819 14.9574 10.2051C14.4372 9.97813 14.0219 9.56288 13.7949 9.04261C13.7181 8.86655 13.665 8.63556 13.6366 8.23773C13.6076 7.83271 13.6072 7.31465 13.6072 6.57143C13.6072 5.82821 13.6076 5.31015 13.6366 4.90513C13.665 4.50729 13.7181 4.2763 13.7949 4.10024C14.0219 3.57997 14.4372 3.16473 14.9574 2.93773C15.1335 2.86092 15.3645 2.80781 15.7623 2.77938C16.1673 2.75045 16.6854 2.75 17.4286 2.75C18.1718 2.75 18.6899 2.75045 19.0949 2.77938C19.4927 2.80781 19.7237 2.86092 19.8998 2.93773C20.4201 3.16473 20.8353 3.57997 21.0623 4.10024C21.1391 4.2763 21.1922 4.50729 21.2207 4.90513C21.2496 5.31015 21.25 5.82821 21.25 6.57143C21.25 7.31465 21.2496 7.83271 21.2207 8.23773C21.1922 8.63556 21.1391 8.86655 21.0623 9.04261C20.8353 9.56288 20.4201 9.97813 19.8998 10.2051C19.7237 10.2819 19.4927 10.3351 19.0949 10.3635C18.6899 10.3924 18.1718 10.3929 17.4286 10.3929Z"
                          stroke="#242220"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M17.4286 21.25C16.6854 21.25 16.1673 21.2496 15.7623 21.2207C15.3645 21.1922 15.1335 21.1391 14.9574 21.0623C14.4372 20.8353 14.0219 20.4201 13.7949 19.8998C13.7181 19.7237 13.665 19.4927 13.6366 19.0949C13.6076 18.6899 13.6072 18.1718 13.6072 17.4286C13.6072 16.6854 13.6076 16.1673 13.6366 15.7623C13.665 15.3645 13.7181 15.1335 13.7949 14.9574C14.0219 14.4372 14.4372 14.0219 14.9574 13.7949C15.1335 13.7181 15.3645 13.665 15.7623 13.6366C16.1673 13.6076 16.6854 13.6072 17.4286 13.6072C18.1718 13.6072 18.6899 13.6076 19.0949 13.6366C19.4927 13.665 19.7237 13.7181 19.8998 13.7949C20.4201 14.0219 20.8353 14.4372 21.0623 14.9574C21.1391 15.1335 21.1922 15.3645 21.2207 15.7623C21.2496 16.1673 21.25 16.6854 21.25 17.4286C21.25 18.1718 21.2496 18.6899 21.2207 19.0949C21.1922 19.4927 21.1391 19.7237 21.0623 19.8998C20.8353 20.4201 20.4201 20.8353 19.8998 21.0623C19.7237 21.1391 19.4927 21.1922 19.0949 21.2207C18.6899 21.2496 18.1718 21.25 17.4286 21.25Z"
                          stroke="#242220"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </Link>
                </li>

                <li className="items-center">
                  <Link href="/admin/settings">
                    <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/admin/settings") !== -1 ? " text-scDark hover:text-black" : "text-black hover:text-black")}>
                      <FiSettings size={"20"} />
                      Settings
                    </a>
                  </Link>
                </li>

                <li className="items-center">
                  <Link href="/admin/tables">
                    <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/admin/tables") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                      <AiOutlineTable size={"20"} />
                      Tables
                    </a>
                  </Link>
                </li>
              </ul>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline">Auth Layout Pages</h6>
              {/* Navigation */}

              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                  <Link href="/auth/login">
                    <a className="text-black hover:text-black text-xs uppercase py-3 font-bold block">
                      <i className="fas fa-fingerprint text-black mr-2 text-sm"></i> Login
                    </a>
                  </Link>
                </li>

                <li className="items-center">
                  <Link href="/auth/register">
                    <a className="text-black hover:text-black text-xs uppercase py-3 font-bold block">
                      <i className="fas fa-clipboard-list text-black mr-2 text-sm"></i> Register
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6  bg-[rgb(240, 255, 255)/0.56] backdrop-blur-[80px] ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            menu
          </button>
          {/* Brand */}
          <Link href="/">
            <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
          </Link>
          {/* User */}
          {/* <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-black">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onClick={() => setCollapseShow("hidden")}>
                    menu
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-black placeholder-black text-black bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline">Security Layout Pages</h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/security/dashboard">
                  <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/security/dashboard") !== -1 ? " text-scDark hover:text-black" : "text-black hover:text-black")}>
                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.57143 10.3929C5.82821 10.3929 5.31015 10.3924 4.90513 10.3635C4.50729 10.3351 4.2763 10.2819 4.10024 10.2051C3.57997 9.97813 3.16473 9.56288 2.93773 9.04261C2.86092 8.86655 2.80781 8.63556 2.77938 8.23773C2.75045 7.83271 2.75 7.31465 2.75 6.57143C2.75 5.82821 2.75045 5.31015 2.77938 4.90513C2.80781 4.50729 2.86092 4.2763 2.93773 4.10024C3.16473 3.57997 3.57997 3.16473 4.10024 2.93773C4.2763 2.86092 4.50729 2.80781 4.90513 2.77938C5.31015 2.75045 5.82821 2.75 6.57143 2.75C7.31465 2.75 7.83271 2.75045 8.23773 2.77938C8.63556 2.80781 8.86655 2.86092 9.04261 2.93773C9.56288 3.16473 9.97813 3.57997 10.2051 4.10024C10.2819 4.2763 10.3351 4.50729 10.3635 4.90513C10.3924 5.31015 10.3929 5.82821 10.3929 6.57143C10.3929 7.31465 10.3924 7.83271 10.3635 8.23773C10.3351 8.63556 10.2819 8.86655 10.2051 9.04261C9.97813 9.56288 9.56288 9.97813 9.04261 10.2051C8.86655 10.2819 8.63556 10.3351 8.23773 10.3635C7.83271 10.3924 7.31465 10.3929 6.57143 10.3929Z"
                        stroke="#242220"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6.57143 21.25C5.82821 21.25 5.31015 21.2496 4.90513 21.2207C4.50729 21.1922 4.2763 21.1391 4.10024 21.0623C3.57997 20.8353 3.16473 20.4201 2.93773 19.8998C2.86092 19.7237 2.80781 19.4927 2.77938 19.0949C2.75045 18.6899 2.75 18.1718 2.75 17.4286C2.75 16.6854 2.75045 16.1673 2.77938 15.7623C2.80781 15.3645 2.86092 15.1335 2.93773 14.9574C3.16473 14.4372 3.57997 14.0219 4.10024 13.7949C4.2763 13.7181 4.50729 13.665 4.90513 13.6366C5.31015 13.6076 5.82821 13.6072 6.57143 13.6072C7.31465 13.6072 7.83271 13.6076 8.23773 13.6366C8.63556 13.665 8.86655 13.7181 9.04261 13.7949C9.56288 14.0219 9.97813 14.4372 10.2051 14.9574C10.2819 15.1335 10.3351 15.3645 10.3635 15.7623C10.3924 16.1673 10.3929 16.6854 10.3929 17.4286C10.3929 18.1718 10.3924 18.6899 10.3635 19.0949C10.3351 19.4927 10.2819 19.7237 10.2051 19.8998C9.97813 20.4201 9.56288 20.8353 9.04261 21.0623C8.86655 21.1391 8.63556 21.1922 8.23773 21.2207C7.83271 21.2496 7.31465 21.25 6.57143 21.25Z"
                        stroke="#242220"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M17.4286 10.3929C16.6854 10.3929 16.1673 10.3924 15.7623 10.3635C15.3645 10.3351 15.1335 10.2819 14.9574 10.2051C14.4372 9.97813 14.0219 9.56288 13.7949 9.04261C13.7181 8.86655 13.665 8.63556 13.6366 8.23773C13.6076 7.83271 13.6072 7.31465 13.6072 6.57143C13.6072 5.82821 13.6076 5.31015 13.6366 4.90513C13.665 4.50729 13.7181 4.2763 13.7949 4.10024C14.0219 3.57997 14.4372 3.16473 14.9574 2.93773C15.1335 2.86092 15.3645 2.80781 15.7623 2.77938C16.1673 2.75045 16.6854 2.75 17.4286 2.75C18.1718 2.75 18.6899 2.75045 19.0949 2.77938C19.4927 2.80781 19.7237 2.86092 19.8998 2.93773C20.4201 3.16473 20.8353 3.57997 21.0623 4.10024C21.1391 4.2763 21.1922 4.50729 21.2207 4.90513C21.2496 5.31015 21.25 5.82821 21.25 6.57143C21.25 7.31465 21.2496 7.83271 21.2207 8.23773C21.1922 8.63556 21.1391 8.86655 21.0623 9.04261C20.8353 9.56288 20.4201 9.97813 19.8998 10.2051C19.7237 10.2819 19.4927 10.3351 19.0949 10.3635C18.6899 10.3924 18.1718 10.3929 17.4286 10.3929Z"
                        stroke="#242220"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M17.4286 21.25C16.6854 21.25 16.1673 21.2496 15.7623 21.2207C15.3645 21.1922 15.1335 21.1391 14.9574 21.0623C14.4372 20.8353 14.0219 20.4201 13.7949 19.8998C13.7181 19.7237 13.665 19.4927 13.6366 19.0949C13.6076 18.6899 13.6072 18.1718 13.6072 17.4286C13.6072 16.6854 13.6076 16.1673 13.6366 15.7623C13.665 15.3645 13.7181 15.1335 13.7949 14.9574C14.0219 14.4372 14.4372 14.0219 14.9574 13.7949C15.1335 13.7181 15.3645 13.665 15.7623 13.6366C16.1673 13.6076 16.6854 13.6072 17.4286 13.6072C18.1718 13.6072 18.6899 13.6076 19.0949 13.6366C19.4927 13.665 19.7237 13.7181 19.8998 13.7949C20.4201 14.0219 20.8353 14.4372 21.0623 14.9574C21.1391 15.1335 21.1922 15.3645 21.2207 15.7623C21.2496 16.1673 21.25 16.6854 21.25 17.4286C21.25 18.1718 21.2496 18.6899 21.2207 19.0949C21.1922 19.4927 21.1391 19.7237 21.0623 19.8998C20.8353 20.4201 20.4201 20.8353 19.8998 21.0623C19.7237 21.1391 19.4927 21.1922 19.0949 21.2207C18.6899 21.2496 18.1718 21.25 17.4286 21.25Z"
                        stroke="#242220"
                        strokeWidth="1.5"
                      />
                    </svg>
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/security/mask">
                  <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/security/mask") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                    <AiOutlineTable size={"20"} />
                    Tables Mask
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/security/nomask">
                  <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/security/nomask") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                    <AiOutlineTable size={"20"} />
                    Tables No Mask
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline">Auth Layout Pages</h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a className="text-black hover:text-black text-xs uppercase py-3 font-bold block">
                    <i className="fas fa-fingerprint text-black mr-2 text-sm"></i> Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a className="text-black hover:text-black text-xs uppercase py-3 font-bold block">
                    <i className="fas fa-clipboard-list text-black mr-2 text-sm"></i> Register
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
