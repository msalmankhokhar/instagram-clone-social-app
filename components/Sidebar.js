import SvgInstagram from "@/components/AppIcons/Instagram";
import SvgHome from "@/components/AppIcons/Home";
import SvgSearch from "@/components/AppIcons/Search";
import SvgCompass from '@/components/AppIcons/Compass'
import SvgVideo from '@/components/AppIcons/Video'
import SvgMessenger from '@/components/AppIcons/Messenger'
import SvgHeart from '@/components/AppIcons/Heart'
import SvgPlus from '@/components/AppIcons/Plus'
import SvgBars from '@/components/AppIcons/Bars'

export default function Sidebar() {
  return (
    <div id="sideBar" className="border-r pt-7 pb-4 gap-12 border-gray-300 dark:border-gray-600 flex flex-col items-center">
        <div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgInstagram />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgHome />
          </div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgSearch />
          </div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgCompass />
          </div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgVideo />
          </div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-700">
            <SvgMessenger />
          </div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgHeart />
          </div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgPlus />
          </div>
        </div>
        <div>
          <div className="icon-wrapper p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all ease-in-out duration-500">
            <SvgBars />
          </div>
        </div>
      </div>
  )
}
