import React, { useState } from 'react';
import { RadioGroup, Dialog } from '@headlessui/react'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars3BottomRightIcon, XMarkIcon, CodeBracketIcon, BellAlertIcon, DevicePhoneMobileIcon, BoltIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import AnimatedPhone from './components/AnimatedPhone';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import Pricing from './components/Pricing';

const navigation = [
  { name: 'Features', href: '#features', target: '' },
  { name: 'Pricing', href: '#pricing', target: '' },
  { name: 'FAQ', href: '#FAQ', target: '' },
  { name: 'Documentation', href: '/docs', target: '_blank' },
]

const footer_navigation = {
  solutions: [
    { name: 'Enterprise', href: '#' },
    { name: 'Marketing', href: '#' },
    { name: 'Commerce', href: '#' },
  ],
  support: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#FAQ' },
    { name: 'Documentation', href: '/docs' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const faqs = [
  {
    question: "What is 'ourapp'?",
    answer:
      "Our app allows users to generate web apps that consist of pages, forms and products. All apps are accessible via QR code and dynamic URL. We offer a white label license for users requiring a dedicated branded instance e.g. apps.myservices.com.",
  },
  {
    question: "What's the difference between a web app and a mobile app?",
    answer:
      "Web apps are rich javascript applications that run on a hosted domain and in the browser. Mobile apps are packaged applications submitted to app stores. Ourapp end users do not need to install an app to use the service.",
  },
  {
    question: "Our business has specific requirements",
    answer:
      "We offer custom contractual arrangements as per our enterprise license and can cater for bespoke requirements during an engagement.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className="bg-white">
        <header className="relative mx-auto max-w-screen-xl z-50 bg-transparent">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ourapp</span>
                <img
                  className="md:px-6 h-11 md:h-12 lg:h-12"
                  src="/logo.png"
                  alt="yourapp.com.au logo"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} target={item.target} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-2">
              <a class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" href="https://ourapp.io/signin">Sign in</a>
              <a class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://ourapp.io/register">Get started<span aria-hidden="true"> →</span></a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">ourapp menu</span>
                  <img
                    className="h-11 md:h-12 lg:h-12"
                    src="/logo.png"
                    alt="yourapp.com.au logo"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* Hero section */}
        <div className="relative isolate -mt-24">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
          </svg>

          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div class="flex">
                <div class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span class="font-semibold text-indigo-600">We’re hiring</span>
                  <span class="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
                  <a class="flex items-center gap-x-1" href="https://www.linkedin.com/in/mitchandersondev/">
                    <span class="absolute inset-0" aria-hidden="true"></span>Get in touch</a></div></div>

              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Lightning fast app generation
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Create effortless mobile first experiences for your customers (or staff). Ourapp comes packed with customisable features such as Forms, Pages and Products.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <a class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://ourapp.io/signin">
                  Watch video
                </a>
                <a class="text-sm font-semibold leading-6 text-gray-900" href="https://ourapp.io/register">Get started<span aria-hidden="true"> →</span></a></div>
            </div>
            <AnimatedPhone />
          </div>
        </div>
      </div>

      {/* Build and publish */}
      <div id="features" className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 lg:block">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Start selling products in minutes
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our product is designed to make selling online seamless, with robust integration for social media browsers, offering a full shopping experience rather than just a landing page like other platforms.
              <br /><br />
              ourapp.studio supports Progressive Web App (PWA) features such as "Add to Home Screen," full-screen browsing, and custom app icons, allowing users to interact with your brand like a native mobile app.
            </p>
            <div class="mt-10 flex items-center gap-x-6"><a class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://ourapp.io/signin">Example app<span aria-hidden="true"> →</span></a><a class="text-sm font-semibold leading-6 text-gray-900" href="/docs" target="_blank">See tutorials</a></div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="/example-editor.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <Features />

      <Pricing />

      <CallToAction />

      
      <div id="FAQ" className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8">
        <div class="mx-auto max-w-2xl text-center"><h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2></div>
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>

      <div id="company" className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8">
          <div className="hidden lg:block mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <iframe src="https://my.spline.design/iphone14procopy-f1a162c79f35a2392bdeaea13bf01849/" frameBorder="0" width="100%" height="100%" style={{ height: 50 + 'em' }}></iframe>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We're looking to create case studies
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We are actively seeking partnerships across diverse industries. Your unique challenges inspire our innovation. Join us in crafting case studies that will not only demonstrate the versatility and efficacy of our platform but also pioneer new solutions for your industry-specific needs.
            </p>
            <div className="mt-10 flex items-center gap-x-6">

            </div>
          </div>
        </div>
      </div>

      <footer className="bg-indigo-600" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              className="h-16"
              src="/footer.png"
              alt="Company name" />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footer_navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footer_navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footer_navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-sm leading-5 text-white">&copy; 2024 OURAPP SOFTWARE PTY LTD </p>
          </div>
        </div>
      </footer>
    </div>
  );
};