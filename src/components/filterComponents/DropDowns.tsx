import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Fragment } from 'react'
import RangeSlider from '../RangeSlider'
import { type } from 'os';
interface DropDownProps {
    title: string;
    option?: string[];
    type: string;
    rangeValues?: number[];
}

const DropDowns = (Props: DropDownProps) => {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (

        <Menu key={Props.title} as="div" className="relative inline-block text-left w-full">
            <div>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-light text-gray-900 hover:bg-gray-20">
                    {Props.title}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" z-10 mt-2 w-full origin-top-right rounded-md bg-white focus:outline-none">
                    <div className="py-1">
                        <>
                            {
                                Props.type === 'range' ?
                                    <RangeSlider className="w-45 h-8" defaultValue={Props.rangeValues} />
                                    :
                                    <>
                                        {
                                            Props.option && Props.option.map((item, index) => {
                                                return (
                                                    <>
                                                        <Menu.Item key={index}>
                                                            {({ active }) => (
                                                                <a
                                                                 
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    {item}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                            }

                            {/* <RangeSlider className="w-80 h-12" defaultValue={50} /> */}
                        </>



                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    )
}

export default DropDowns