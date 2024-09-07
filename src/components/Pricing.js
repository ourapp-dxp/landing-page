import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
    {
        name: 'Sellers',
        id: 'tier-SM',
        href: 'https://ourapp.io/register',
        priceMonthly: { monthly: 'Free', annually: 'Free' },
        description: 'Get started selling in minutes. The starter plan is perfect for modern merchants and includes QR codes, fast product checkout and page builder.',
        features: ['1 app workspace', 'QR code export', 'Pages and Products', '48-hour support response time', 'Access to future features'],
    },
    {
        name: 'Pro',
        id: 'tier-PRO',
        href: 'https://ourapp.io/register?account_type=premium',
        priceMonthly: { monthly: '$9.99', annually: '$99.00' },
        description: 'Perfect for small projects requiring a separate project space for development and rich service apps with multiple levels of information architecture.',
        features: ['3 app workspaces', 'QR code export', 'Forms, Pages and Products', 'Access to simple form integration options', '24-hour support response time'],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
    const [frequency, setFrequency] = useState(frequencies[0]);

    return (
        <div id="pricing" className="isolate overflow-hidden bg-indigo-600">
            <div className="mx-auto max-w-7xl px-6 pb-96 text-center sm:pt-16 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-white">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Pricing plans for businesses of all sizes
                    </p>
                </div>
                <div className="relative mt-6">
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-white">
                        All prices are in AUD and include 10% GST.<br />
                        Annual subscriptions include a GST equivalent discount.
                    </p>
                </div>
                <div className="mt-8 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5"
                    >
                        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                        {frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(
                                        checked ? 'bg-white text-indigo-600' : 'text-white',
                                        'cursor-pointer rounded-full px-2.5 py-1'
                                    )
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
            </div>
            <div className="flow-root bg-white pb-24 sm:pb-32">
                <div className="-mt-80">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                            {tiers.map((tier) => {
                                // Build the href link for "Pro" based on frequency
                                const href =
                                    tier.name === 'Pro'
                                        ? `https://ourapp.io/register?account_type=premium${frequency.value === 'annually' ? '&annual=true' : ''}`
                                        : tier.href;

                                return (
                                    <div
                                        key={tier.id}
                                        className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                                    >
                                        <div>
                                            <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                                                {tier.name}
                                            </h3>
                                            <div className="mt-4 flex items-baseline gap-x-2">
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                    {frequency.value === 'monthly' ? tier.priceMonthly.monthly : tier.priceMonthly.annually}
                                                </span>
                                                <span className="text-base font-semibold leading-7 text-gray-600">
                                                    {frequency.value === 'monthly' ? '/month' : '/year'}
                                                </span>
                                            </div>
                                            <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex gap-x-3">
                                                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <a
                                            href={href}
                                            aria-describedby={tier.id}
                                            className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get started today
                                        </a>
                                    </div>
                                );
                            })}
                            <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                <div className="lg:min-w-0 lg:flex-1">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Enterprise</h3>
                                    <p className="mt-1 text-base leading-7 text-gray-600">
                                    Dedicated infrastructure (server, database and authentication) and includes automatic updates to your instance. Everything is managed for you.
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    id="schedule-link"
                                    className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Schedule demo <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
