import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import clsx from 'clsx'
import { Container } from './Container'

const features = [
    {
        title: 'Studio editor',
        description:
            "Build pages and forms, publish apps instantly. Compose and style your app via our no code, drop and drag builder.",
        image: '/screenshots/editor.png',
    }
]

{/*
   {
        title: 'Page builder',
        description:
            "Design immersive pages for your users. Pages are useful for important service information, articles or blog posts.",
        image: '/screenshots/expenses.png',
    },
    {
        title: 'Form builder',
        description:
            "Generate business forms that are multi part and conditional. Receive form submissions via webhook or email.",
        image: '/screenshots/expenses.png',
    }  
*/}

export default function Features() {
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="features"
            aria-label="Features for running your books"
            className="relative overflow-hidden bg-indigo-600 py-20"
        >
            <div className="relative isolate">
                
                {/* 
                    <svg class="-mt-24 absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,gray,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" stroke="none"></path> 
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" class="overflow-visible fill-indigo-900"> 
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0"></path>
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect> 
                    </svg>
                */}


                <Container className="relative">
                    <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                        <h2 class="text-base font-semibold leading-7 text-white">
                            Deploy faster
                        </h2>
                        <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Everything you need to deploy
                        </p>
                        <p class="mt-6 text-base leading-7 text-white">
                            Our apps are accessible via a dynamic URL (and QR code) once published. <br />They work flawlessly across modern browsers and social media in-app browsers.
                        </p>
                    </div>
                    <TabGroup
                        className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                        vertical={tabOrientation === 'vertical'}
                    >
                        {({ selectedIndex }) => (
                            <>
                                <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                    <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                        {features.map((feature, featureIndex) => (
                                            <div
                                                key={feature.title}
                                                className={clsx(
                                                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                                                    selectedIndex === featureIndex
                                                        ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                                        : 'hover:bg-white/10 lg:hover:bg-white/5',
                                                )}
                                            >
                                                <h3>
                                                    <Tab
                                                        className={clsx(
                                                            'font-display text-lg ui-not-focus-visible:outline-none',
                                                            selectedIndex === featureIndex
                                                                ? 'text-blue-600 lg:text-white'
                                                                : 'text-blue-100 hover:text-white lg:text-white',
                                                        )}
                                                    >
                                                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                        {feature.title}
                                                    </Tab>
                                                </h3>
                                                <p
                                                    className={clsx(
                                                        'mt-2 hidden text-sm lg:block',
                                                        selectedIndex === featureIndex
                                                            ? 'text-white'
                                                            : 'text-blue-100 group-hover:text-white',
                                                    )}
                                                >
                                                    {feature.description}
                                                </p>
                                            </div>
                                        ))}
                                    </TabList>
                                </div>
                                <TabPanels className="lg:col-span-7">
                                    {features.map((feature) => (
                                        <TabPanel key={feature.title} unmount={false}>
                                            <div className="relative sm:px-6 lg:hidden">
                                                <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                                <img
                                                    className="w-full"
                                                    src={feature.image}
                                                    alt=""
                                                    priority
                                                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                                />
                                            </div>
                                        </TabPanel>
                                    ))}
                                </TabPanels>
                            </>
                        )}
                    </TabGroup>
                </Container>
            </div>
        </section>
    )
}
