import React from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <>
      <div className='blog-page mt-5'>
        <div className=" dark:text-gray-100 px-5">

          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">CORS</p>
            </div>
            <div className="mt-3">
              <p className='text-xl mb-3'>What is cors?</p>
              <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link className="hover:underline dark:text-violet-400">Read more</Link>
              <div>
                <p className="flex items-center">
                  <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                  <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container my-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Firebase</p>
            </div>
            <div className="mt-3">
              <p className='text-xl mb-3'> Why are you using firebase?</p>
              <p>The best part is that Firebase has all the features that helped my apps to grow to the next level.
                <br />
                When I was stepping into Android app development, it was about the mid of 2015; I was lost entirely regarding the backend development of my app.

                <br />
                Because at that time, Firebase was not really that stable/popular/reliable and Parse (a Facebook’s BAAS company) was also not accepting the new users as they shut down it.
                <br />

                And creating my server, managing it was quite a hassle for a newbie ( and I didn’t go for that hassle, thank God).
                <br />

                So after a few months, I heard about Firebase, I started learning it and implementing it. This is how I began using Firebase, can I call myself as the early adopters of Firebase?
                <br />

                The top Firebase products that I am addicted to are:</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link className="hover:underline dark:text-violet-400">Read more</Link>
              <div>
                <p className="flex items-center">
                  <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                  <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Authentication</p>
            </div>
            <div className="mt-3">
              <p className='text-xl mb-3'>
                What other options do you have to implement authentication?
              </p>
              <p>Requiring users to provide and prove their identity adds a layer of security between adversaries and sensitive data. With authentication, IT teams can employ least privilege access to limit what employees can see. The average employee, for example, doesn't need access to company financials, and accounts payable doesn't need to touch developer projects.</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link className="hover:underline dark:text-violet-400">Read more</Link>
              <div>
                <p className="flex items-center">
                  <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                  <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container max-w-4xl px-10 py-6 mx-auto my-4 rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Private Route</p>
            </div>
            <div className="mt-3">
              <p className='text-xl mb-3'>
                How does the private route work?
              </p>
              <p>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link className="hover:underline dark:text-violet-400">Read more</Link>
              <div>
                <p className="flex items-center">
                  <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                  <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Node</p>
            </div>
            <div className="mt-3">
              <p className='text-xl mb-3'>
                What is Node?
              </p>
              <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link className="hover:underline dark:text-violet-400">Read more</Link>
              <div>
                <p className="flex items-center">
                  <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                  <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Blog;