import React, { useState } from 'react';
import { RadioGroup, Dialog } from '@headlessui/react'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars3BottomRightIcon, XMarkIcon, CodeBracketIcon, BellAlertIcon, DevicePhoneMobileIcon, BoltIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#FAQ' },
  { name: 'Company', href: '#company' },
]

const footer_navigation = {
  solutions: [
    { name: 'Enterprise', href: '#' },
    { name: 'Marketing', href: '#' },
    { name: 'Commerce', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
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

const secondaryFeatures = [
  {
    name: 'Smart forms',
    description:
      'Generate business forms that are multi part and conditional. Receive form submissions via webhook or email.',
    href: '#',
  },
  {
    name: 'Page builder',
    description:
      'Design immersive pages for your users. Pages are useful for important service information, articles or blog posts.',
    href: '#',
  },
  {
    name: 'eCommerce',
    description:
      'We intend to add eCommerce products (via self fulfilment) in the future.',
    href: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const tiers = [
  {
    name: 'Sellers',
    id: 'tier-SM',
    href: '#',
    price: { monthly: 'Free', annually: 'Free' },
    description: 'Get started selling in minutes. The starter plan is perfect for modern merchants and includes QR codes, fast product checkout and page builder.',
    features: ['1 app workspace', 'Pages and Products', '48-hour support response time', 'Access to future features'],
    mostPopular: false,
  },
  {
    name: 'Office hero',
    id: 'tier-SM',
    href: '#',
    price: { monthly: '$9.99', annually: '$99.00' },
    description: 'The hero plan including all current and future web functionality. Perfect for small projects requiring a separate project space for development and rich service apps with multiple levels of information architecture.',
    features: ['3 app workspaces', 'Forms, Pages and Products', 'Access to simple form integration options', '24-hour support response time'],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: 'Email us', annually: 'Email us' },
    description: 'Dedicated infrastructure (server, database and authentication) and includes automatic updates to your instance. Everything is managed for you.',
    features: [
      'Unlimited app workspaces',
      'Dedicated infrastructure',
      'BYO authentication method and domain name options e.g. ourapp.yourcompany.com',
      '1-hour, dedicated response time',
      'Custom contract arrangements available',
      'We can support custom feature development as needed',
      'Access to free monthly consultations with our development team',
    ],
    mostPopular: false,
  },
]

export default function LandingPage() {
  const [frequency, setFrequency] = useState(frequencies[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>

      <div className="bg-white">
        <header className="absolute inset-x-0 z-50">
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
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
        <div className="relative isolate">
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


              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Lightning fast app generation
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Create effortless mobile first experiences for your customers (or staff). Ourapp comes packed with customisable features such as Forms, Pages and Products.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
           
              </div>

            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <img src="/example-app.png" alt="" />
                </foreignObject>
              </svg>

              <div className="hidden lg:block home-feature mt-10 aspect-[6/5] max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                style={{
                  background: `url('/store.png')`,
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className="hidden lg:block circle flex justify-center qr-circle">
                {/*<img className="mt-12" src="/QR.jpg
                          "alt="Floating Circle Image" />*/}
              </div>
              <div className="mx-auto flex justify-center mt-10 gap-x-6">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Build and publish */}
      <div id="features" className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 lg:block">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Build pages and forms, publish apps instantly
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              You can compose and style your app via our no code, drop and drag builder.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our form template is 'multi-step' by default, providing a fast and intuitive forms experience for mobile users.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our page builder (WYSIWYG) supports basic markdown syntax and is perfect for mobile content such as articles, service and contact information.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
             
            </div>
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

      <div className="mx-auto max-w-7xl px-6 my-12 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Our apps are accessible via a dynamic URL (and QR code) once published. They work flawlessly across modern browsers and social media in-app browsers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {secondaryFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div id="pricing" className="min-h-screen">
        <div className="bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Coming soon</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pricing plans for businesses of all sizes
              </p>
            </div>
            <p className="mx-auto text-base mt-6 max-w-2xl text-center text-base leading-7 text-gray-600">
              Choose an affordable plan that’s packed with the best features for engaging your mobile audience. All prices are in AUD and include 10% GST.
              Annual subscriptions include a GST equivalent discount.
            </p>
            <div className="mt-16 flex justify-center">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
              >
                <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                {frequencies.map((option) => (
                  <RadioGroup.Option
                    key={option.value}
                    value={option}
                    className={({ checked }) =>
                      classNames(
                        checked ? 'bg-indigo-600 text-white' : 'text-gray-500',
                        'cursor-pointer rounded-full px-2.5 py-1'
                      )
                    }
                  >
                    <span>{option.label}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                    'rounded-3xl p-8 xl:p-10'
                  )}
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                        'text-lg font-semibold leading-8'
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                  </p>
                  <a
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                      'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    Coming soon
                  </a>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="FAQ" className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
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
              className="h-12"
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
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footer_navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
        </div>
      </footer>

    </div>
  );
};