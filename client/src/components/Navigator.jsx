import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux"
import {SearchAction} from "../Redux/Action"

function Navigator() {
  
const Dispatch = useDispatch()

  const handleSearch = (e) => {
    axios
      .post("http://localhost:5000/search", { name: e.target.value })
      .then((res) => {
        Dispatch(SearchAction(res.data))
      })
  }

  return (
    <>
      <div className="w-full p-3 bg-gray-600  px-10 justify-between flex">
        <form>
         
          <div class="relative">
            <div class="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 rounded-xl ps-10 text-sm text-gray-900 border border-gray-300 "
              placeholder="Search user by name..."
              required
              onChange={handleSearch}
            />
          </div>
        </form>
        <Link to="/" className="text-gray-300 rounded-md flex  p-1 px-2 border border-slate-300">
          Home
        </Link>
      </div>
    </>
  )
}

export default Navigator
